using Backend.Data;
using Backend.Services.Contract;
using Backend.Services.Implementation;
using Backend.Utilities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Reflection;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, $"{Assembly.GetExecutingAssembly().GetName().Name}.xml"));

});

builder.Services.AddDbContext<BasicPointDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IPurchaseService, PurchaseService>();

builder.Services.AddAutoMapper(typeof(AutoMapperProfile));

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v2");
}
    );

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();