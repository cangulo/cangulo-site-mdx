# Align version for packages:

1. Create `Build` in all the projects you want to align
2. insert a xml file called version.props only in the main project:

```xml
<Project>
  <PropertyGroup>
    <PackageId>cangulo.common.testing</PackageId>
    <VersionPrefix>0.0.1</VersionPrefix>
    <VersionSuffix>alpha</VersionSuffix>
    <Authors>Carlos Angulo</Authors>
    <Company>Carlos Angulo</Company>
    <SignAssembly>false</SignAssembly>
  </PropertyGroup>
</Project>
```

3. Add the next import statement in the main _.csproj_ project:

```xml
<Import Project=".\Build\version.props" />
```

csproj file example:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <Import Project=".\Build\version.props" />

  <PropertyGroup>
    <TargetFramework>netcoreapp3.1</TargetFramework>
    <AppDesignerFolder>Build</AppDesignerFolder>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="AutoFixture" Version="4.15.0" />
    <PackageReference Include="AutoFixture.AutoNSubstitute" Version="4.15.0" />
    <PackageReference Include="AutoFixture.Xunit2" Version="4.15.0" />
    <PackageReference Include="xunit.extensibility.core" Version="2.4.1" />
  </ItemGroup>

</Project>

```

4. In case you have other projects dependent, (e.g. `Abstractions`, `Contracts`), add also the Import statement and the include as link, as next:

```xml
<Import Project="..\MainProject\Build\version.props" />
<ItemGroup>
<None Include="..\MainProject\Build\version.props" Link="Build\version.props">
</ItemGroup>
```

# Align version in all projects: 

https://stackoverflow.com/questions/22276561/how-to-sync-nuget-packages-across-multiple-shared-projects-solutions

* The previous link could also be used to share variables along a all the projects

# How to handle the version

https://medium.com/@lindexi_gd/how-to-generate-nuget-package-with-git-tag-version-using-github-action-207ff4040486

https://stackoverflow.com/questions/42797993/package-version-is-always-1-0-0-with-dotnet-pack