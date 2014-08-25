> $ parse new foo ;
> Creating a new project in directory ./foo
> Creating directory ./foo/config
> Creating config file ./foo/config/global.json
> Creating directory ./foo/cloud
> Writing out sample file ./foo/cloud/main.js
> Creating directory ./foo/public
> Writing out sample file ./foo/public/index.html
> Email: master@tonextone.com
> Password: 
> 1: foo
> 2: foo-dev
> 3: trial
> Select an App: 1
> $

> $ parse list ;
> Associated apps are:
> * foo
> $

> $ cd foo/ ;
> $

> $ parse add foo-dev ;
> Email: master@tonextone.com
> Password: 
> 1: foo
> 2: foo-dev
> 3: trial
> Select an App: 2
> $

> $ parse list ;
> Associated apps are:
> * foo
>   foo-dev
> $

> $ parse develop foo-dev ;
> I2013-09-20T08:29:22.366Z] v26: Ran custom endpoint with:
>   Input: {"method"=>"GET", "url"=>"/favicon.ico", "headers"=>{"version"=>"HTTP/1.1", "host"=>"foo-dev.parseapp.com", "user-agent"=>"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.76 Safari/537.36", "accept"=>"*/*", "accept-encoding"=>"gzip,deflate,sdch", "accept-language"=>"ja,en-US;q=0.8,en;q=0.6,zh-CN;q=0.4,zh;q=0.2", "x-forwarded-proto"=>"http"}}
>   Result: Success

...

> $ parse deploy ;
> Uploading source files
> Finished uploading files
> New release is named v1
> $
