namespace DatabaseLayer
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using STSdb4.Database;

    public class Table<TKey, TValue> : IEnumerable<KeyValuePair<TKey, TValue>>
    {
        private IStorageEngine storageEngine;
        private ITable<TKey, TValue> xtable;

        public readonly string Name;

        public Table(IStorageEngine storageEngine ,ITable<TKey, TValue> xtable, string name)
        {
            if (storageEngine == null)
            {
                throw new ArgumentNullException("storageEngine");
            }

            if (xtable == null)
            {
                throw new ArgumentNullException("xtable");
            }

            if (string.IsNullOrEmpty(name))
            {
                throw new ArgumentException("name of table is invalid");
            }

            this.storageEngine = storageEngine;
            this.xtable = xtable;
            this.Name = name;
        }

        public TValue this[TKey key]
        {
            get
            {
                return this.xtable[key];
            }

            set
            {
                this.xtable[key] = value;
                this.storageEngine.Commit();
            }
        }

        public void Insert(TKey key, TValue value)
        {
            if (this.Contains(key))
            {
                throw new ArgumentException("key present");
            }

            this.xtable.Replace(key, value);

            this.storageEngine.Commit();
        }

        public bool Contains(TKey key)
        {
            return this.xtable.Exists(key);
        }

        public bool TryGet(TKey key, out TValue value)
        {
            return this.xtable.TryGet(key, out value);
        }

        public bool Remove(TKey key)
        {
            this.xtable.Delete(key);
            this.storageEngine.Commit();

            return true;
        }

        public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator()
        {
            foreach (var kv in this.xtable)
            {
                yield return kv;
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }
    }
}
