using ArtStore.BackEnd.ArtStoreApplication.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using ArtStore.BackEnd.ArtStoreApplication.Data.Models;
using ArtStore.BackEnd.ArtStoreApplication.Data;
using System.Linq;
using ArtStore.BackEnd.ArtStoreApplication.Services.DTOs;

namespace ArtStore.BackEnd.ArtStoreApplication.Services
{
    public class ItemService : IItemService
    {
        public string All()
        {
            using (var db = new ArtStoreDbContext())
            {
                StringBuilder sb = new StringBuilder();

                var data = db.ItemsForSale.Select(i => new ItemForSaleDTO(i).ToJson()).ToList();
                sb.Append("{");
                sb.Append(string.Join(',', data));
                sb.Append("}");
                return sb.ToString();
            }
        }

        public bool Create(string title, string description, decimal price, User seller)
        {
            throw new NotImplementedException();
        }

        public bool Find(int id)
        {
            throw new NotImplementedException();
        }

        public static void Seed(ArtStoreDbContext db)
        {
            if (!db.ItemsForSale.Any())
            {
                var items = new List<ItemForSale>
                {
                    new ItemForSale
                    {
                       Title = "Witchy Sticker Sheet # 1",
                       Description = "Compilation of cute stickers",
                       Price = 4.5m,
                       ShopId = 1,
                       SellerId = 2
                    },
                    new ItemForSale
                    {
                       Title = "Witchy Sticker Sheet # 2",
                       Description = "Next generation cute stickers",
                       Price = 5m,
                       ShopId = 1,
                       SellerId = 2
                    },
                    new ItemForSale
                    {
                       Title = "Mina Lisa",
                       Description = "Like, totally not a fake!!",
                       Price = 20000m,
                       ShopId = 2,
                       SellerId = 3
                    },
                };

                db.AddRange(items);
                db.SaveChanges();
            }
        }
    }
}
