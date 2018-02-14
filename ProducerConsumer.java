class Solution {
  public static void main(String[] args) throws Exception {
      class BlockingQueue {
        private Object[] data;
        private int size;
        private int head;
        private int tail;
        private int maxLen;
        public BlockingQueue(int maxLen) {
            data = new Object[maxLen];
            this.maxLen = maxLen;
      }

      public synchronized Object deQueue() throws Exception {
          if (size == 0) {
              System.out.print("size0");
              throw new Exception();
          }
          Object tmp = data[head];
          data[head] = null;
          head = (head+1)%data.length;
          size--;
          return tmp;
      }

      public synchronized void enQueue(Object c) throws Exception {
          if (size >= maxLen) {
              throw new Exception();
          }
          data[tail++] = c;
          tail %= data.length;
          size++;
      }

    }

    class QueueThread extends Thread {
      private BlockingQueue q;
      private String type;
      private int n;

      QueueThread (BlockingQueue q, String type, int n) {
        this.q = q;
        this.type = type;
        this.n = n;
      }

      public void run() {

          try {
            while (true) {
              if (type == "CONSUMER") {
                System.out.print(q.deQueue());
              }
              else {
                q.enQueue(n);
              }
            }
          }

          catch (Exception e) {

          }



      }

    }


    BlockingQueue q = new BlockingQueue(3);
    QueueThread c1 = new QueueThread(q, "CONSUMER", 0);
    QueueThread p1 = new QueueThread(q, "PRODUCER", 3);
    QueueThread p2 = new QueueThread(q, "PRODUCER", 5);
    c1.start();
    // p1.start();
    // p2.start();
    // q.enQueue(1);
    // q.deQueue();
    // q.deQueue();
  }

}


// Java program to implement solution of producer
// consumer problem.
import java.util.LinkedList;

public class Solution
{
    public static void main(String[] args)
                        throws InterruptedException
    {
        // Object of a class that has both produce()
        // and consume() methods
        final PC pc = new PC();

        // Create producer thread
//         Thread t1 = new Thread(new Runnable()
//         {
//             @Override
//             public void run()
//             {
//                 try
//                 {
//                     pc.produce();
//                 }
//                 catch(InterruptedException e)
//                 {
//                     e.printStackTrace();
//                 }
//             }
//         });

//         // Create consumer thread
//         Thread t2 = new Thread(new Runnable()
//         {
//             @Override
//             public void run()
//             {
//                 try
//                 {
//                     pc.consume();
//                 }
//                 catch(InterruptedException e)
//                 {
//                     e.printStackTrace();
//                 }
//             }
//         });
        class PCThread extends Thread {
          String type;
          PCThread(String type) {
            this.type = type;
          }

          public void run() {
            try {
              while(true) {
                if (this.type == "Consumer") {
                  pc.consume();
                }
                else {
                  pc.produce();
                }
              }
            }
            catch (Exception e) {
              e.printStackTrace();
            }

          }

        }

        PCThread t1 = new PCThread("Consumer");
        PCThread t2 = new PCThread("Producer");


        // Start both threads
        t1.start();
        t2.start();

        // t1 finishes before t2
        t1.join();
        t2.join();
    }

    // This class has a list, producer (adds items to list
    // and consumber (removes items).
    public static class PC
    {
        // Create a list shared by producer and consumer
        // Size of list is 2.
        LinkedList<Integer> list = new LinkedList<>();
        int capacity = 2;

        // Function called by producer thread
        public synchronized void produce() throws InterruptedException
        {
            int value = 0;
            while (true)
            {
                    // producer thread waits while list
                    // is full
                    while (list.size()==capacity)
                        wait();

                    System.out.println("Producer produced-"
                                                  + value);

                    // to insert the jobs in the list
                    list.add(value++);

                    // notifies the consumer thread that
                    // now it can start consuming
                    notify();

                    // makes the working of program easier
                    // to  understand
                    Thread.sleep(1000);
            }
        }

        // Function called by consumer thread
        public synchronized void consume() throws InterruptedException
        {
            while (true)
            {
                    // consumer thread waits while list
                    // is empty
                    while (list.size()==0)
                        wait();

                    //to retrive the ifrst job in the list
                    int val = list.removeFirst();

                    System.out.println("Consumer consumed-"
                                                    + val);

                    // Wake up producer thread
                    notify();

                    // and sleep
                    Thread.sleep(2000);
            }
        }
    }
}
