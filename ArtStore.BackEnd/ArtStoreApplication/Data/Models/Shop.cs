using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ArtStore.BackEnd.ArtStoreApplication.Data.Models
{
    public class Shop
    {
        public Shop()
        {
            this.ItemsForSale = new HashSet<ItemForSale>();
        }

        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public IEnumerable<ItemForSale> ItemsForSale { get; set; }

        public int OwnerId { get; set; }

        [Required]
        public User Owner { get; set; }

    }
}
