using Microsoft.EntityFrameworkCore;
using BarBaridade;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlite("Data Source=bebidas.db"));

var app = builder.Build();

app.MapGet("/bebidas", (AppDbContext db) => {
    var bebidas = db.TabelaBebidas.ToList();
    return Results.Ok(bebidas);
});

app.Run();