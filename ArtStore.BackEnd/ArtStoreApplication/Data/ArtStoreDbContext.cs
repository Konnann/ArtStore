namespace ArtStore.BackEnd.ArtStoreApplication.Data
{
    using Microsoft.EntityFrameworkCore;
    using Models;

    public class ArtStoreDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Shop> Shops { get; set; }
        public DbSet<ItemForSale> ItemsForSale { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder
                .UseSqlServer("Server=.;Database=ArtShop;Integrated Security=True;");
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {          
            builder
                .Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            builder
                .Entity<User>()
                .HasOne(u => u.Shop)
                .WithOne(s => s.Owner)
                .HasForeignKey<Shop>(u => u.OwnerId)
                .OnDelete(DeleteBehavior.Restrict);

            builder
               .Entity<Shop>()
               .HasIndex(s => s.Name)
               .IsUnique();

            builder
               .Entity<Shop>()
               .HasMany(s => s.ItemsForSale)
               .WithOne(s => s.Shop);

            builder
                .Entity<ItemForSale>()
                .HasOne(i => i.Seller)
                .WithMany(u => u.ItemsForSale);

        }

    }
}
