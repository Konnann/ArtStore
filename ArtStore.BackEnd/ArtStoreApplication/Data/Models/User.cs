namespace ArtStore.BackEnd.ArtStoreApplication.Data.Models
{
    using Common;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class User
    {
        public User()
        {
            this.ItemsForSale = new HashSet<ItemForSale>();   
        }

        public int Id { get; set; }

        [Required]
        [MinLength(ValidationConstants.Account.UsernameMinLength)]
        [MaxLength(ValidationConstants.Account.UsernameMaxLength)]       
        public string Username { get; set; }

        [MinLength(ValidationConstants.Account.FirstNameMinLength)]
        [MaxLength(ValidationConstants.Account.FirstNameMaxLength)]
        public string FirstName { get; set; }

        [MinLength(ValidationConstants.Account.LastNameMinLength)]
        [MaxLength(ValidationConstants.Account.LastNameMaxLength)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(ValidationConstants.Account.EmailMaxLength)]
        public string Email { get; set; }

        [Required]
        [MinLength(ValidationConstants.Account.PasswordMinLength)]
        [MaxLength(ValidationConstants.Account.PasswordMaxLength)]
        public string Password { get; set; }

        public bool IsAdmin { get; set; }

        public bool IsShopOwner { get; set; }

        public int? ShopId { get; set; }

        public Shop Shop { get; set; }

        public IEnumerable<ItemForSale> ItemsForSale { get; set; }
    }
}
