namespace ArtStore.BackEnd.ArtStoreApplication
{
    using ArtStore.BackEnd.ArtStoreApplication.Services;
    using Controllers;
    using Data;
    using Microsoft.EntityFrameworkCore;
    using Server.Contracts;
    using Server.Routing.Contracts;
    using System;
    using System.Globalization;
    using ViewModels.Account;
    using ViewModels.Admin;

    public class ArtStoreApp : IApplication
    {
        public void InitializeDatabase()
        {
            using (var db = new ArtStoreDbContext())
            {
                //db.Database.EnsureDeleted();
                db.Database.EnsureCreated();
                db.Database.Migrate();
                //UserService.Seed(db);
                //ShopService.Seed(db);
            }
        }

        public void Configure(IAppRouteConfig appRouteConfig)
        {
            //Don't need to be authorized to get this data
            //appRouteConfig.AnonymousPaths.Add("/");
            appRouteConfig.AnonymousPaths.Add("/account/register");
            appRouteConfig.AnonymousPaths.Add("/account/login");
            appRouteConfig.AnonymousPaths.Add("/shops/all");
            appRouteConfig.AnonymousPaths.Add("/users/all");


            appRouteConfig
                .Get(
                    "/account/register",
                    req => new AccountController(req).Register());

            appRouteConfig
                .Post(
                    "/account/register",
                    req => new AccountController(req).Register(
                        new RegisterViewModel
                        {
                            Username = req.FormData["username"],
                            Email = req.FormData["email"],
                            Password = req.FormData["password"],
                            ConfirmPassword = req.FormData["confirm-password"]
                        }));

            appRouteConfig
                .Get(
                    "/account/login",
                    req => new AccountController(req).Login());

            appRouteConfig
                .Post(
                    "/account/login",
                    req => new AccountController(req).Login(
                        new LoginViewModel
                        {
                            Username = req.FormData["username"],
                            Password = req.FormData["password"]
                        }));

            appRouteConfig
                .Get(
                    "/shops/all",
                    req => new ShopController(req).All());

            appRouteConfig
                .Get(
                    "/users/all",
                    req => new AccountController(req).AllUsers());

            appRouteConfig
                .Get("/", req => new HomeController(req).Index());
        }
    }
}
