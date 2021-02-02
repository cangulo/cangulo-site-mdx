https://aws.amazon.com/blogs/devops/using-nuget-with-aws-codeartifact/
https://docs.aws.amazon.com/codeartifact/latest/ug/nuget-cli.html

Check you personal config all the steps

```powershell
$domain=""
$repository=""
$accountId=""
aws codeartifact list-packages --domain $domain --domain-owner $accountId --repository $repository
```
