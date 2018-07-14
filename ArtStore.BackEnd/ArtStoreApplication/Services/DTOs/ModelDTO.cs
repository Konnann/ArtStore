using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace ArtStore.BackEnd.ArtStoreApplication.Data.DTOs
{
    public abstract class ModelDTO
    {
        public int Id { get; set; }

        public string ToJson()
        {
            Object data = this;
            PropertyInfo[] fields = data.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public);

            StringBuilder sb = new StringBuilder();
            sb.Append($"\"{this.Id}\":{{");

            List<string> fieldData = new List<string>();

            foreach (PropertyInfo f in fields)
            {
                fieldData.Add($"\"{ f.Name}\": \"{ f.GetValue(data)}\"");
            }
            sb.Append(string.Join(',', fieldData));
            sb.Append("}");
            Console.WriteLine(sb.ToString());
            return sb.ToString();
        }
    }
}
