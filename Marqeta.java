import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

public static void main(String args[] ) throws Exception {
        public class Putter extends Thread {
          Queue q;

          public Putter(Queue q) {
            this.q = q;
          }

          public void run() {
            for (;;) {
                try {
                    Model data = null;
                    // get data
                    data = q.pop();
                    Response response = TransactionProcessor.process(data);
                } catch(Exception e) {
                    // if we try to sleep here, user may feel slow response
                    // if we do not sleep, CPU will be wasted
                }
            }
        }

        String filename = args[0];
        BufferedReader bf = new BufferedReader(new FileReader(filename));
        List<String> lineQ = new LinkedList<String>();
        LinkedBlockingQueue<Model> models= new LinkedBlockingQueue<Model>();

        for (int i=0; i<100; i++) {
          Putter p = new Putter(models);
          p.start();
        }

        while (bf != null) {
            while (lineQ.size() != 2) {
                String line = bf.readline();
                lineQ.add(line);
            }

            String str1 = lineQ[0];
            String str2 = lineQ[1];
            String[] str1fields = Parser.parse(str1);
            String[] str2fields = Parser.parse(str2);
            if (str1fields[0] == '06' && str2fields[0] == '06') {
                // create obj1 based on str1fields
                Model obj1 = new Model();
                obj1.RecordType = Integer.parseInt(str1fields[0]);
                obj1.TransactionCode = Integer.parseInt(str1fields[1]);
                obj1.CardNumber = Integer.parseInt(str1fields[2]);
                obj1.MerchantCategoryCode = Integer.parseInt(str1fields[3]);
                obj1.Filler = Integer.parseInt(str1fields[4]);
                obj1.TransactionAmount = Float.parseFloat(str1fields[5]);
                obj1.OriginalTransactionDate = Integer.parseInt(str1fields[6]);
                models.add(obj1);
            }
            else if (str1fields[0] == '06' && str2fields[0] == '07') {
                //create obj1 based on str1fields and str2fields
                Model obj1 = new Model();
                obj1.RecordType = Integer.parseInt(str1fields[0]);
                obj1.TransactionCode = Integer.parseInt(str1fields[1]);
                obj1.CardNumber = Integer.parseInt(str1fields[2]);
                obj1.MerchantCategoryCode = Integer.parseInt(str1fields[3]);
                obj1.Filler = Integer.parseInt(str1fields[4]);
                obj1.TransactionAmount = Float.parseFloat(str1fields[5]);
                obj1.OriginalTransactionDate = Integer.parseInt(str1fields[6]);
                obj1.SDRDescription = str2fields[3];
                models.add(obj1);
            }
        }

    }
}



// ## Detail Transaction Record (Record Type = 06) REQUIRED LINE
// Record Type - 2 bytes - ALNUM - position 1-2
// Transaction Code - 4 bytes - ALNUM - position 3-6
// Card Number - 19 bytes - ALNUM - position 7-25
// Merchant Category Code - 4 bytes  - ALNUM - position 26-29
// Filler - 15 bytes - ALNUM - position 30 - 44
// Transaction Amount - 12 bytes - SIGNED NUMERIC - position 45 - 56, 2 decimals implied
// Original Transaction Date - 8 bytes - ALNUM - position 57-64, format: CCYYMMDD

// ## Supplementary Data Record (Record Type = 07) OPTINAL LINE
// Record Type - 2 bytes - ALNUM - position 1-2
// Transaction Code - 4 bytes - ALNUM - position 3-6
// Card Number - 19 bytes - ALNUM - position 7-25
// SDR Description - 39 bytes - position 26-64
public class Model {
  int RecordType;
  int TransactionCode;
  int CardNumber;
  int MerchantCategoryCode;
  int Filler;
  float TransactionAmount;
  int OriginalTransactionDate;
  String SDRDescription;
}
