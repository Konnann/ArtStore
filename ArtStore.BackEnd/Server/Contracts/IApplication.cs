namespace ArtStore.BackEnd.Server.Contracts
{
    using Routing.Contracts;

    public interface IApplication
    {
        void Configure(IAppRouteConfig appRouteConfig);
    }
}
