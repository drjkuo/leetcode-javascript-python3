class Logger {

private: std::unordered_map<string, int> mapLogger;

public:
    /** Initialize your data structure here. */

    Logger() {

    }

    /** Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. */
    bool shouldPrintMessage(int timestamp, string message) {
        std::unordered_map<string, int>::iterator iter = mapLogger.find(message);
        if(iter != mapLogger.end()) // found
        {
            if (iter->second <= (timestamp-10)) // and not in 10 seconds
            {
                mapLogger[iter->first] = timestamp; // update
                return true;
            }
            else
            {
                return false;
            }
        }

        else // not found
        {
            mapLogger[message] = timestamp;
            return true;
        }
    }

};

/**
 * Your Logger object will be instantiated and called as such:
 * Logger obj = new Logger();
 * bool param_1 = obj.shouldPrintMessage(timestamp,message);
 */
