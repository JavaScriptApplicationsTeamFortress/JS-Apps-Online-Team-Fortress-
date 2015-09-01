namespace DatabaseLayer
{
    using System;
    using STSdb4.Database;

    public class Storage : IDisposable
    {
        public readonly string FileName;

        private IStorageEngine storageEngine;

        // Flag: Has Dispose already been called? 
        private bool disposed = false;

        public Storage(string fileName)
        {
            if (string.IsNullOrEmpty(fileName))
            {
                throw new ArgumentException("fileName");
            }

            this.FileName = fileName;

            this.storageEngine = STSdb.FromFile(this.FileName);
        }

        public Table<TKey, TValue> OpenTable<TKey, TValue>(string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                throw new ArgumentException("name of table is invalid");
            }

            var xtable = this.storageEngine.OpenXTable<TKey, TValue>(name);
            var table = new Table<TKey, TValue>(this.storageEngine, xtable, name);

            return table;
        }

        public void Close()
        {
            this.storageEngine.Close();
        }

        // Public implementation of Dispose pattern callable by consumers. 
        public void Dispose()
        {
            this.Dispose(true);
            GC.SuppressFinalize(this);
        }

        // Protected implementation of Dispose pattern. 
        protected virtual void Dispose(bool disposing)
        {
            if (this.disposed)
            {
                return;
            }

            if (disposing)
            {
                this.storageEngine.Dispose();

                // Free any other managed objects here. 
            }

            // Free any unmanaged objects here. 
            this.disposed = true;
        }
    }
}
