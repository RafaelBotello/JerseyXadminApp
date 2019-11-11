using System.ComponentModel.DataAnnotations;

namespace JerseyXadmin.Models
{
    public class Products
    {
        [Key] public int id_products { get; private set; }
        public string product_name { get; set; }
        public string class1 { get; set; }
        public string class2 { get; set; }
        public string product_description { get; set; }
        public string colors { get; set; }
        public string dataprice { get; set; }
        public string category { get; set; }
    }
}