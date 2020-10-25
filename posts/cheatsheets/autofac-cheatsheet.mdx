---
title: Autofac Cheatsheet
description: This is a list of usefull autofac scenarios where you have to
  register classes in ASP.NET Core
img: ./resources/autofac/autofac-logo.png
tags:
  - autofac
  - di
  - dependency-injection
  - dependency
  - netcore
  - decorator
references:
  - ['Assembly Scanning','https://autofaccn.readthedocs.io/en/latest/register/scanning.html']
---
# Scenarios

## Register Modules in the startup class

1. Import Autofac nugget package in your API

2. Add the next method in your *startup* class, then provide the other projects modules to be register

<!--StartFragment-->

```csharp
  public void ConfigureContainer(ContainerBuilder builder)
  {
    // Register your own things directly with Autofac, like:
    builder.RegisterModule(new MyApplicationModule());
  }
```

<!--EndFragment-->

## Register all the classes which end with *Repository*

<!--StartFragment-->

```csharp
var dataAccess = Assembly.GetExecutingAssembly();

builder
  .RegisterAssemblyTypes(dataAccess)
  .Where(t => t.Name.EndsWith("Repository"))
  .AsImplementedInterfaces();
```

<!--EndFragment-->

## Register all the classes which end with *Repository* and  implement a generic interface

**Scenario: using the CQRS with a custom validator**

<!--StartFragment-->

```csharp
// Generic Interface
public interface IValidator<T>
{
    Task<Result> Validate(T command);
}

// Specific class that inherits from the interface
public class RequestValidator : IValidator<Request>{

}

// how to register all the classes that implement it
containerBuilder
  .RegisterAssemblyTypes(currentAssembly)
  .Where(t =>
           t.IsClass &&
           t.Name.EndsWith("Validator") &&
           t.GetInterfaces().Length == 1 &&
           t.GetInterfaces()[0]
             .GetGenericTypeDefinition() == typeof(IValidator<>))
  .AsImplementedInterfaces();
```

<!--EndFragment-->