namespace ArtStore.BackEnd.ArtStoreApplication.Common
{
    public class ValidationConstants
    {
        public const string InvalidMinLengthErrorMessage = "{0} must be at least {1} symbols.";
        public const string InvalidMaxLengthErrorMessage = "{0} cannot be more than {1} symbols.";
        public const string ExactLengthErrorMessage = "{0} must be exactly {1} symbols.";

        public class Account
        {
            public const int UsernameMinLength = 2;
            public const int UsernameMaxLength = 30;
            public const int EmailMaxLength = 30;
            public const int PasswordMinLength = 6;
            public const int PasswordMaxLength = 50;
            public const int FirstNameMinLength = 2;
            public const int FirstNameMaxLength = 30;
            public const int LastNameMinLength = 2;
            public const int LastNameMaxLength = 30;
        }

        public class Item
        {
            public const int TitleMinLength = 3;
            public const int TitleMaxLength = 50;
            public const int DescriptionMinLength = 11;
        }
    }
}
