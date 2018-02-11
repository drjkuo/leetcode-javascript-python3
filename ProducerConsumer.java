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
