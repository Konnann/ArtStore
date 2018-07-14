
using ArtStore.BackEnd.ArtStoreApplication.Data;
using ArtStore.BackEnd.ArtStoreApplication.Data.Models;
using ArtStore.BackEnd.ArtStoreApplication.Services.Contracts;
using ArtStore.BackEnd.ArtStoreApplication.Services.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ArtStore.BackEnd.ArtStoreApplication.Services
{
    public class ShopService : IShopService
    {
        public bool Create(string name, string description, int ownerId)
        {
            using (var db = new ArtStoreDbContext())
            {
                var shop = new Shop
                {
                    Name = name,
                    Description = description,
                    OwnerId = ownerId
                };

                db.Add(shop);
                db.SaveChanges();
            }

            return true;
        }

        public string All()
        {
            using (var db = new ArtStoreDbContext())
            {
                StringBuilder sb = new StringBuilder();

                var data = db.Shops.Select(s => new ShopDTO(s).ToJson()).ToList();
                sb.Append("{");
                sb.Append(string.Join(',', data));
                sb.Append("}");
                return sb.ToString();
            }
        }

        public string GetById(int id)
        {
            using (var db = new ArtStoreDbContext())
            {
                var shop = db
                  .Shops
                  .Where(s => s.Id == id)
                  .Select(s => new ShopDTO(s).ToJson())
                  .FirstOrDefault();
                return shop;
            }
        }

        public static void Seed(ArtStoreDbContext db)
        {
            if (!db.Shops.Any())
            {
                var owners = db
                    .Users
                    .Where(u => u.IsShopOwner == true)
                    .ToList();

                var shops = new List<Shop>
                {
                    new Shop
                    {
                       Description = "Best shop in the world. Must Visit",
                       Name = "Galaxy sheep",
                       OwnerId = 2,
                       DateCreated = DateTime.Now
                    },
                    new Shop
                    {
                       Description = "Please buy my things, I need money to eat",
                       Name = "Hipster extravaganza",
                       OwnerId = 3,
                       DateCreated = DateTime.Now
                    }
                };

                db.AddRange(shops);
                db.SaveChanges();
            }
        }

    }
}
