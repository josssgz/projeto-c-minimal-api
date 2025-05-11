using Microsoft.EntityFrameworkCore;

namespace BarBaridade
{
    // Essa classe faz a ponte entre o banco de dados e as classes do projeto
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Aqui a tabela que vai guardar as bebidas (como se fosse uma lista no banco)
        public DbSet<Bebida> TabelaBebidas => Set<Bebida>();

        // Método para configurar o modelo do banco de dados
        protected override void OnModelCreating(ModelBuilder builder)
        {
            // Inserindo alguns dados iniciais (bebidas) no banco
            builder.Entity<Bebida>().HasData(
                new Bebida { Id = 1, Nome = "Vodka", TeorAlcoolico = 40f },
                new Bebida { Id = 2, Nome = "Whisky", TeorAlcoolico = 42f },
                new Bebida { Id = 3, Nome = "Rum", TeorAlcoolico = 38f },
                new Bebida { Id = 4, Nome = "Gin", TeorAlcoolico = 37f },
                new Bebida { Id = 5, Nome = "Champagne", TeorAlcoolico = 12f },
                new Bebida { Id = 6, Nome = "Choop", TeorAlcoolico = 4.5f },
                new Bebida { Id = 7, Nome = "Tequila", TeorAlcoolico = 40f },
                new Bebida { Id = 8, Nome = "Água", TeorAlcoolico = 0f },
                new Bebida { Id = 9, Nome = "Suco de Limão", TeorAlcoolico = 0f },
                new Bebida { Id = 10, Nome = "Suco de Morango", TeorAlcoolico = 0f },
                new Bebida { Id = 11, Nome = "Suco de Maracujá", TeorAlcoolico = 0f },
                new Bebida { Id = 12, Nome = "Vinho", TeorAlcoolico = 12f },
                new Bebida { Id = 13, Nome = "Energético", TeorAlcoolico = 0f },
                new Bebida { Id = 14, Nome = "Tônica", TeorAlcoolico = 0f },
                new Bebida { Id = 15, Nome = "Coca", TeorAlcoolico = 0f },
                new Bebida { Id = 16, Nome = "Guaraná", TeorAlcoolico = 0f },
                new Bebida { Id = 17, Nome = "Sprite", TeorAlcoolico = 0f },
                new Bebida { Id = 18, Nome = "Limão (fruta)", TeorAlcoolico = 0f },
                new Bebida { Id = 19, Nome = "Gelo", TeorAlcoolico = 0f }
            );
        }
    }
}
