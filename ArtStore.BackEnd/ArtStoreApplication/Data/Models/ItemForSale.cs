using ArtStore.BackEnd.ArtStoreApplication.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ArtStore.BackEnd.ArtStoreApplication.Data.Models
{
    public class ItemForSale
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [MinLength(ValidationConstants.Item.TitleMinLength)]
        [MaxLength(ValidationConstants.Item.TitleMaxLength)]
        public string Title { get; set; }

        public string Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        public int ShopId { get; set; }

        public Shop Shop { get; set; }

        public int SellerId { get; set; }

        [Required]
        public User Seller { get; set; }
    }
}
