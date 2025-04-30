using Microsoft.EntityFrameworkCore;

namespace BarBaridade
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Bebida> TabelaBebidas => Set<Bebida>();
    }
}