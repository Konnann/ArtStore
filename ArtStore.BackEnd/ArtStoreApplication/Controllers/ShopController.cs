using ArtStore.BackEnd.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;
using ArtStore.BackEnd.Server.Http.Contracts;
using ArtStore.BackEnd.ArtStoreApplication.Services.Contracts;
using ArtStore.BackEnd.ArtStoreApplication.Services;
using ArtStore.BackEnd.Server.Http.Response;

namespace ArtStore.BackEnd.ArtStoreApplication.Controllers
{
    public class ShopController : BaseController
    {
        private IShopService shops;
        private IItemService itemsForSale;
        private IDictionary<string, string> parameters;

        public ShopController(IHttpRequest request) : base(request)
        {
            this.parameters =  this.Request.UrlParameters;
            this.shops = new ShopService();
            this.itemsForSale = new ItemService();
        }

        public IHttpResponse All()
        {
            var result = this.shops.All();

            return this.JsonResponse(result);
        }

        public IHttpResponse AllItems()
        {
            var result = this.itemsForSale.All();

            return this.JsonResponse(result);
        }

        public IHttpResponse Shop()
        {
            int id = -1;
            if (this.parameters.Keys.Contains("Id"))
            {
                int.TryParse(this.parameters["Id"], out id);
                if (id > -1)
                {
                    var shop = this.shops.GetById(id);
                    return this.JsonResponse(shop);
                }
            }
            return new NotFoundResponse();
        }

    }
}
