namespace ArtStore.BackEnd.ArtStoreApplication.ViewModels.Account
{
    using Common;
    using System.ComponentModel.DataAnnotations;
    using Utilities;

    public class RegisterViewModel
    {
        [Display(Name = "Username")]
        [Required]
        [MinLength(
            ValidationConstants.Account.UsernameMinLength,
            ErrorMessage = ValidationConstants.InvalidMinLengthErrorMessage)]
        [MaxLength(
            ValidationConstants.Account.UsernameMaxLength,
            ErrorMessage = ValidationConstants.InvalidMaxLengthErrorMessage)]
        public string Email { get; set; }

        [Display(Name = "E-mail")]
        [Required]
        [MaxLength(
            ValidationConstants.Account.EmailMaxLength,
            ErrorMessage = ValidationConstants.InvalidMaxLengthErrorMessage)]
        [EmailAddress]
        public string Username { get; set; }

        [Display(Name = "First Name")]
        [MinLength(
            ValidationConstants.Account.FirstNameMinLength,
            ErrorMessage = ValidationConstants.InvalidMinLengthErrorMessage)]
        [MaxLength(
            ValidationConstants.Account.FirstNameMaxLength,
            ErrorMessage = ValidationConstants.InvalidMaxLengthErrorMessage)]
        public string FirstName { get; set; }


        [Display(Name = "Last Name")]
        [MinLength(
            ValidationConstants.Account.LastNameMinLength,
            ErrorMessage = ValidationConstants.InvalidMinLengthErrorMessage)]
        [MaxLength(
            ValidationConstants.Account.LastNameMaxLength,
            ErrorMessage = ValidationConstants.InvalidMaxLengthErrorMessage)]
        public string LastName { get; set; }

        [Required]
        [MinLength(
            ValidationConstants.Account.PasswordMinLength,
            ErrorMessage = ValidationConstants.InvalidMinLengthErrorMessage)]
        [MaxLength(
            ValidationConstants.Account.PasswordMaxLength,
            ErrorMessage = ValidationConstants.InvalidMaxLengthErrorMessage)]
        [Password]
        public string Password { get; set; }

        [Display(Name = "Confirm Password")]
        [Compare(nameof(Password))]
        public string ConfirmPassword { get; set; }
    }
}
