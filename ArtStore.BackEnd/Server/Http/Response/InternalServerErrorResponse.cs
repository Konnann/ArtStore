namespace ArtStore.BackEnd.Server.Http.Response
{
    using Enums;
    using ArtStore.BackEnd.Server.Common;
    using System;

    public class InternalServerErrorResponse : ViewResponse
    {
        public InternalServerErrorResponse(Exception ex)
            : base(HttpStatusCode.InternalServerError, new InternalServerErrorView(ex))
        {
        }
    }
}
