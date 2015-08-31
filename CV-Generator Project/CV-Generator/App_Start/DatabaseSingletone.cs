using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DatabaseLayer;
using System.IO;

namespace CV_Generator.App_Start
{
    public class DatabaseSingletone
    {
        private static Storage storage;

        public static Storage Storage
        {
            get
            {
                if (storage == null)
                {
                    var path = Path.Combine(AppDomain.CurrentDomain.GetData("DataDirectory").ToString(), "data.stsdb");
                    storage = new Storage(path);
                }

                return storage;
            }
        }
    }
}