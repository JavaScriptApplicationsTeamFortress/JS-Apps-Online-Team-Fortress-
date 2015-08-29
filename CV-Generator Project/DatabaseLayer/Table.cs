namespace DatabaseLayer
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using STSdb4.Database;

    public class Table<TKey, TValue> : IEnumerable<KeyValuePair<TKey, TValue>>
    {
        public readonly ITable<TKey, TValue> XTable;
        public readonly string Name;

        public Table(ITable<TKey, TValue> xtable, string name)
        {
            if (xtable == null)
            {
                throw new ArgumentNullException("xtable");
            }

            if (string.IsNullOrEmpty(name))
            {
                throw new ArgumentException("name of table is invalid");
            }

            this.XTable = xtable;
            this.Name = name;
        }

        public TValue this[TKey key]
        {
            get
            {
                return this.XTable[key];
            }

            set
            {
                this.XTable[key] = value;
            }
        }

        public void Insert(TKey key, TValue value)
        {
            if (this.Contains(key))
            {
                throw new ArgumentException("key present");
            }

            this.XTable.Replace(key, value);
        }

        public bool Contains(TKey key)
        {
            return this.XTable.Exists(key);
        }

        public bool TryGet(TKey key, out TValue value)
        {
            return this.XTable.TryGet(key, out value);
        }

        public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator()
        {
            foreach (var kv in this.XTable)
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
