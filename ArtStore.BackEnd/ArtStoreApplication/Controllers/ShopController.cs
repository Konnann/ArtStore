using ArtStore.BackEnd.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;
using ArtStore.BackEnd.Server.Http.Contracts;
using ArtStore.BackEnd.ArtStoreApplication.Services.Contracts;
using ArtStore.BackEnd.ArtStoreApplication.Services;

namespace ArtStore.BackEnd.ArtStoreApplication.Controllers
{
    public class ShopController : BaseController
    {
        private IShopService shops;
        private IItemService itemsForSale;

        public ShopController(IHttpRequest request) : base(request)
        {
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

    }
}
