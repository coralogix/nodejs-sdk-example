# node-sdk-example

## Install:
```
npm install --save coralogix-logger
```

## Configuration:

**privateKey** (String): 
> A unique ID that represents your team. The private key can be found > > under DataFlow->Api Keys->Send Your Logs. 

**applicationName** (String): 
>The name of your main application. For example, a company named Startup which develops app_1 and app_2 can use “Startup app_1” and “Startup app_2” for this parameter; or if they want to debug their test environment they might insert the “Startup app_1 – Test” or “Startup app_1 – Staging”.

**subsystemName** (String): 
>The name of your sub-system. Your application probably has multiple subsystems, e.g. “Backend servers”, “Middleware”, “Frontend servers”, “Database servers” etc. In order to help you examine only the data you need, inserting the subsystem parameter is vital.


## Coralogix Cluster Config:

**CORALOGIX_URL** (String):
>Is an environment variable that defines to which Coralogix Cluster will the logs be sent to. You can Check your cluster region by looking into you teams URL ending (.com, .us, .in)
```
api.coralogix.us 
api.coralogix.com (default)
api.app.coralogix.in

```

Can be added as a Environment Variable or with the following piece of code

```
    process.env['CORALOGIX_URL'] = 'https://api.coralogix.us/api/v1/logs';

```

## SDK Usage

Importing the SDK. This way we can use it in our code.
```
var Coralogix = require("coralogix-logger");
```

We create a LoggerConfig with the values needed by the SDK. Above you will see the description of each value.

```
const config = new Coralogix.LoggerConfig({
        applicationName:"nodetester",
        privateKey:"",
        subsystemName:"nodetestersub",
    });
```

We apply the config we created to our Logger.
```
Coralogix.CoralogixLogger.configure(config);
```

We then Create a new logger using CoralogixLogger, alse we will set up a Category for it. Category is one of several Metadata for Coralogix Logs.
```
const logger = new Coralogix.CoralogixLogger("My Category");
```

Now we are ready to start sending logs to Coralogix.

We will create a new log with several Metadata, the only one mandatory is severity.
```
const log = new Coralogix.Log({
        severity:Coralogix.Severity.info,
        className:"myClassName",
        methodName:"myMethodName",
        text:"Hello World ! "
    })
```
In this example severity will be Info, className and methodName are other Coralogix Metadata that you can send as part of your log, and **text** is the actual log.

Then the only thing missing is actually sending the log.
```
logger.addLog(log);
```

For more information please visit https://coralogix.com/integrations/coralogix-nodejs-integration/

