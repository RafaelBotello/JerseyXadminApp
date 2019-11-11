using Microsoft.EntityFrameworkCore;

namespace JerseyXadmin.Models
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {
        }
        public DbSet<Products> Products { get; set; }


    }
}