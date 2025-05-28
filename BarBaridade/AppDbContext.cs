using Microsoft.EntityFrameworkCore;

namespace BarBaridade
{
    // Essa classe faz a ponte entre o banco de dados e as classes do projeto
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Aqui a tabela que vai guardar as bebidas (como se fosse uma lista no banco)
        public DbSet<Bebida> TabelaBebidas => Set<Bebida>();

    }
}
