# Nuget Cheatsheet

| Column A                                           |                                                         |
| -------------------------------------------------- | ------------------------------------------------------- |
| `dotnet pack -c Release -o $nugetPath`             | B1                                                      |
| `dotnet push <PackagePath> -s <SourcePackageName>` | you can get `<SourcePackageName>` by listing the source |
| `dotnet nuget list source`                         | List all the package sources                            |
| `dotnet nuget remove source SOURCE_NAME`           | B2                                                      |


# How to setup a local nuget package folder

```powershell
# variables
$sourceEndPoint="C:\localNuggetPackages"
$sourceName="localNugetPackageSource"

dotnet nuget add source $sourceEndPoint -n $sourceName
```