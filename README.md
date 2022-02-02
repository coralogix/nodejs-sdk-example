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
For more information please visit https://coralogix.com/integrations/coralogix-nodejs-integration/

