//Coralogix Node SDK Example
//Author: Coralogix Ltd.
//Email: support@coralogix.com
    
    // This set up the Env Variable for this stand alone example. Best practice is to use .env or os env variable.
    var Coralogix = require("coralogix-logger");
    // global confing for application name, private key, subsystem name 
    
    const config = new Coralogix.LoggerConfig({
        applicationName:"nodetester",
        privateKey:"",
        subsystemName:"nodetestersub",
    });
     
    Coralogix.CoralogixLogger.configure(config);
     
    // create a new logger with category 
    const logger = new Coralogix.CoralogixLogger("My Category");
     
    // create a log className and methodName are optional metadata.
    const log = new Coralogix.Log({
        severity:Coralogix.Severity.info,
        className:"myClassName",
        methodName:"myMethodName",
        text:"Hello World ! "
    })
    // send log to coralogix 
    logger.addLog(log);
