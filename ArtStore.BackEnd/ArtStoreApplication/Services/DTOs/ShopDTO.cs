using ArtStore.BackEnd.ArtStoreApplication.Data.DTOs;
using ArtStore.BackEnd.ArtStoreApplication.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ArtStore.BackEnd.ArtStoreApplication.Services.DTOs
{
    public class ShopDTO: ModelDTO
    {
        public ShopDTO(Shop shop)
        {
            this.Id = shop.Id;
            this.Name = shop.Name;
            this.Description = shop.Description;
            this.OwnerName = shop.Owner.FirstName;
        }

        public string Name { get; set; }

        public string Description { get; set; }

        public string OwnerName { get; set; }
    }
}
