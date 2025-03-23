
// 1. Grab the start button from index.html: document.querySeelctor("button name") then store in a variable
// 2.  On click methods: addEventListener('click', function(){}); 
// 3. write some questions: Use dom methods to create and store series of question then appand to the dom, which would go inside the addEventListner function
// 4. Write a timer function: that start as the button is clicked;  
// 4. Write so conditional statement to check:
// - if the the user selects the wirte answer present the next question 
// - else/else if deduct time from the timer and resent the net question
// if there is no question left or the timer has reached 0, end the game. 
// 5. Ask user to enter their initials:
// create form in the form insert input box 
// then take the value store it in browser local storage or in an array or an object 
// get the information and present it to the user 


var quizTerms = `
Try to answer the following quiz questions within the time
limit. Keep in mind that incorrect answers will penalize your
time by ten seconds or add 10 sec if correct. At the end you get total score and keep record of each try. Best of Luck!`

// var questions = [
//     {
//         title: "What is JavaScript? ",
//         choices: ['Its a scripting languages', 'Object oriented Language', 'Its a front end Language', 'None of the above'],
//         answer: "Its a scripting languages"
//     },
//     {
//         title: "What are JavaScript Data Types? ",
//         choices: ['Number', 'String', 'Boolean', 'Object', "All of the above"],
//         answer: "All of the above"
//     }, {
//         title: "What is the use of isNaN function? ",
//         choices: ['Returns true if its a string', 'Returns false if its a number', 'Returns true if its a number', 'Returns true if its a Boolean type'],
//         answer: 'Returns true if its a number'
//     },
//     {
//         title: "What are undeclared and undefined variables? ",
//         choices: ['Undeclared variables are those that do not exist in a program and are not declared', 'Variables do not exist && !declared. And Undefined is not undeclared variable', 'Undefined variables are those that are declared in the program but have not been given any value', 'I dont Know'],
//         answer: "Variables do not exist && !declared. And Undefined is not undeclared variable"
//     },
//     {
//         title: "What are global variables? How are these variable declared?",
//         choices: ['Var key must used for it to be Global variables', 'Global variables decleared in the functions', 'Global variables has scope', 'Global variables has no scope'],
//         answer: "Global variables has no scope"
//     },
//     {
//         title: "What is `this` keyword in JavaScript? ",
//         choices: ['`This` keyword refers to the object from where it was called.', 'We Need to paint this house.', 'Notice that she is referring to the house with a this keyword.'],
//         answer: "`This` keyword refers to the object from where it was called."
//     },
//     {
//         title: "What is the working of timers in JavaScript?",
//         choices: ['Timers are used to execute a piece of code at a set time.', 'Timers are used to repeat a piece of code in a given interval.', 'Timers are used to execute a piece of code at a set time or repeat the code in a given interval.'],
//         answer: "Timers are used to execute a piece of code at a set time or repeat the code in a given interval."
//     },
//     {
//         title: "Which two symbol is used for comments in Javascript?",
//         choices: ['// for Single line comments and /* */ for Multi Line Comment', '// for Single line comments', '/* */ for Multi Line Comment', 'I dont Know'],
//         answer: "// for Single line comments and /* */ for Multi Line Comment"
//     },
// ]

// var quizAnswers = ['Choice 4', 'Choice 3', 'Choice 2', 'Choice 1']

// push ansers to the browser

// loop over the object, then use click eventlistener to control the flow of the loop using either break/continue statemnes. 

// for (var i = 0; i < questions.length; i++) {




var questions = [
    {
        "title": "What is the purpose of the Azure Firewall?",
        "choices": [
            "Protects sensitive information",
            "Helps monitor user’s behavior in on-premises and cloud environment",
            "Provide a set of rules that ensure the security of network resources.",
            "All of the above"
        ],
        "answer": "Provide a set of rules that ensure the security of network resources."
    },
    {
        "title": "This type of attack makes a web server stop working abruptly due to consecutive requests from different sources.",
        "choices": [
            "Cross-site Scripting (XSS) Attack",
            "Password Attack",
            "Distributed Denial-of-Service (DDoS) Attack",
            "Malware Attack"
        ],
        "answer": "Distributed Denial-of-Service (DDoS) Attack"
    },
    {
        "title": "How is the Network Security Group different from the Application Security Group?",
        "choices": [
            "NSG defines traffic policies, whereas ASG defines network security based on application policies.",
            "NSG is responsible for tracking the attacks, whereas ASG configures attacks.",
            "ASG is limited to two VMs, whereas NSG has unlimited resources",
            "None of the above"
        ],
        "answer": "NSG defines traffic policies, whereas ASG defines network security based on application policies."
    },
    {
        "title": "Which services use the Access Control List (ACL) to allow or deny network traffic access to the subnet or VM?",
        "choices": [
            "Azure Key Vault",
            "Azure Firewall",
            "Network Security Group",
            "Azure Information Protection"
        ],
        "answer": "Network Security Group"
    },
    {
        "title": "What is the function of the Azure Key Vault?",
        "choices": [
            "Provides secure access to secrets",
            "Ensures the network connectivity",
            "Allows sharing of user’s credential",
            "Prevents the use of resources"
        ],
        "answer": "Provides secure access to secrets"
    },
    {
        "title": "Which Azure service acts as a resource firewall?",
        "choices": [
            "Azure Monitor",
            "Azure DNS",
            "Network Security Group",
            "Content Delivery Network"
        ],
        "answer": "Network Security Group"
    },
    {
        "title": "Which of the following allows us to limit the access of Key Vault to the users?",
        "choices": [
            "Networking Policy",
            "Access Policy",
            "Tags",
            "All of the above"
        ],
        "answer": "Access Policy"
    },
    {
        "title": "Which of the following is a key element in Defense-in-Depth?",
        "choices": [
            "Strategy to slow the advance of an attack to get unauthorized access to information",
            "Each layer provides protection, so if one layer is breached, a subsequent prevents further exposure",
            "Both A and B",
            "None of them"
        ],
        "answer": "Both A and B"
    },
    {
        "title": "Which service is responsible for providing a platform to users for verification?",
        "choices": [
            "Identity Services",
            "Authentication",
            "Entra ID",
            "Multi-Factor Authentication (MFA)"
        ],
        "answer": "Entra ID"
    },
    {
        "title": "Identity service is responsible for which one of the following?",
        "choices": [
            "Managing the traffic load",
            "Routing Services",
            "Subscription and Directory",
            "Access Management"
        ],
        "answer": "Access Management"
    },
    {
        "title": "The user cannot be authorized until the user has gone through the process of _____________.",
        "choices": [
            "Modulation",
            "Encryption",
            "Authentication",
            "Data Diddling"
        ],
        "answer": "Authentication"
    },
    {
        "title": "What is the first Entra ID instance called after creating an account in Azure?",
        "choices": [
            "Tenant",
            "Credential",
            "Proxy Server",
            "None of the above"
        ],
        "answer": "Tenant"
    },
    {
        "title": "You are setting up resources in Azure and need to filter traffic based on source IP address and port, destination IP address and port, and protocol between your on-premises network and Azure. Which of the following meets these minimum requirements?",
        "choices": [
            "ExpressRoute",
            "Azure Firewall",
            "Application security groups",
            "User-defined routes"
        ],
        "answer": "Azure Firewall"
    },
    {
        "title": "You are evaluating moving a web application that you host on-premises to Azure. The solution comprises three VMs—a web front end, an application server, and a database server. You need to ensure that your administrators can access all of the VMs for remote management on port 3389, but only the web front end should be accessible over port 80. You decide to deploy an application security group to protect the web server and enable access to the other servers.",
        "choices": [
            "deploy Web Application Firewall to filter and route traffic to the web server and deploy network security groups to enable RDP to all three VMs.",
            "deploy Web Application Firewall to filter the traffic and meet both requirements.",
            "deploy a network security group to filter traffic and meet both requirements.",
            "No change is needed"
        ],
        "answer": "deploy a network security group to filter traffic and meet both requirements."
    },
    {
        "title": "You are considering deploying a key web application to Azure. You decide to deploy Web Application Firewall with Application Gateway as part of the project. Which of the following correctly describes the function of Web Application Firewall in this scenario?",
        "choices": [
            "When properly configured, it ensures that traffic reaches the application only on port 80 for HTTP traffic.",
            "It protects the web application from common web-based attacks.",
            "It ensures that users can reach the web service on port 80 and administrators can RDP to the VMs on port 3389.",
            "None of the above"
        ],
        "answer": "It protects the web application from common web-based attacks."
    },
    {
        "title": "Your organization has made the decision to move workloads into Azure. As the Directory Services administrator, you need to explain authentication and authorization in Azure to the program managers leading the project. Which of the following are correct statements?",
        "choices": [
            "Identifying a user by a username and password is a form of authorization.",
            "Validating that a user account has the necessary permissions to access a resource is an example of authorization.",
            "Authentication identifies a user but does not provide access to resources.",
            "Providing a password to access a shared resource is a form of authorization."
        ],
        "answer": "Validating that a user account has the necessary permissions to access a resource is an example of authorization."
    },
    {
        "title": "Which of the following are correct statements regarding Azure Security Center? (Choose all that apply.)",
        "choices": [
            "Security Center integrates natively with Microsoft Defender to provide risk detection and assessment.",
            "Security Center supports Linux operating systems.",
            "You must add resources to Security Center to begin monitoring those resources.",
            "Security Center provides monitoring and threat protection for VMs in Azure as well as on-premises."
        ],
        "answer": "Security Center integrates natively with Microsoft Defender to provide risk detection and assessment."
    },
    {
        "title": "You are moving a SQL Server Analysis Services (SSAS) solution from on-premises to Azure to support custom reporting through Power BI. You want to enable access only when a report creator needs to query for data. Which Azure service supports just-in-time (JIT) access control, enabling users to gain access to the server for only a specified period of time?",
        "choices": [
            "Advanced Threat Protection",
            "Security Center",
            "Azure Key Vault",
            "Azure Service Health"
        ],
        "answer": "Security Center"
    },
    {
        "title": "You are deploying a new solution that requires four instances of Azure SQL Server in an existing subscription, and you receive a message that you need to increase the subscription limit to create these resources. Which option correctly describes how to increase the limit?",
        "choices": [
            "Modify the policy that is restricting you from creating the resource.",
            "Use Azure Resource Manager to increase the limits.",
            "You must create a new subscription and deploy the resources to it.",
            "Open an online support case to have Microsoft increase the limit for you."
        ],
        "answer": "Open an online support case to have Microsoft increase the limit for you."
    },
    {
        "title": "Is the underlined portion of the following statement true, or does it need to be replaced with one of the other fragments that appear below? The Azure Pricing Calculator enables you to estimate the cost of a specific Azure solution based on the resources and services in that solution.",
        "choices": [
            "can calculate the estimated cost of moving a data center to Azure.",
            "factors facilities costs such as power and cooling into an estimate.",
            "is a downloadable tool that can help you calculate the costs of deploying an Azure solution.",
            "No change is needed."
        ],
        "answer": "No change is needed."
    },
    {
        "title": "Which of the following allows you to create a budget for your Azure expenses, set up configurable notifications, so you will know if you are hitting a budgeted limit, and evaluate your costs?",
        "choices": [
            "Management Groups",
            "Cost Management",
            "Pricing Calculator",
            "TCO Calculator"
        ],
        "answer": "Cost Management"
    },
    {
        "title": "You have on-premises applications that you want to migrate to Azure. What would be the best choice if you want to estimate how much you can save in Azure?",
        "choices": [
            "Cost Management",
            "Azure Advisor",
            "Pricing Calculator",
            "TCO Calculator"
        ],
        "answer": "Pricing Calculator"
    },
    {
        "title": "Your organization completed a sizable Azure deployment over the past year encompassing compute, storage, big data, and serverless computing, with a relatively small DevOps component. As the IT Director, you have been tasked by the CIO with reducing Azure expenditures. You cannot reduce the resources you have deployed in Azure. Which option could provide the most significant cost savings?",
        "choices": [
            "Reviewing and resizing VMs",
            "Moving resources to less expensive regions",
            "Using Azure reservations to prepay for services",
            "Moving from Azure SQL Database to Azure SQL Managed Instance"
        ],
        "answer": "Using Azure reservations to prepay for services"
    },
    {
        "title": "How are Azure subscriptions related to pricing?",
        "choices": [
            "If you lock subscriptions in for 1 or 3 years, the services within it go down in price",
            "The more subscriptions you have, the cheaper each service will get",
            "The billing of each service in your account is within a single subscription",
            "The price of a subscription depends on the location of your company or personal address"
        ],
        "answer": "The billing of each service in your account is within a single subscription"
    },
    {
        "title": "Which of the following is most likely to increase Azure operational costs?",
        "choices": [
            "Adding another subscription",
            "Moving storage from the hot access tier to the archive tier",
            "Deploying connected resources across multiple regions",
            "None of the above"
        ],
        "answer": "Deploying connected resources across multiple regions"
    },
    {
        "title": "From the following, which features are in Azure Cost Management? (Choose 2)",
        "choices": [
            "Recommendations to move services between Azure regions to save on cost",
            "Visualize future costs for your Azure account",
            "Visualize current costs for your Azure account",
            "Automatic shutdown of services that have not been used for a set time"
        ],
        "answer": "Visualize future costs for your Azure account, Visualize current costs for your Azure account"
    },
    {
        "title": "Which of the following enables you to define budgets for your subscriptions and receive notifications when spending crosses alert thresholds that you have set?",
        "choices": [
            "Azure Quota Management",
            "Azure Budget Management",
            "Azure Cost Management",
            "Azure Monitor"
        ],
        "answer": "Azure Cost Management"
    },
    {
        "title": "Which factors influence the cost of using products and services on Azure? (Choose 3)",
        "choices": [
            "The location of the service or resource",
            "Resource usage. The more you use it, the cheaper it gets",
            "The age of the resource",
            "Resource size",
            "How much bandwidth will you use"
        ],
        "answer": "The location of the service or resource, Resource size, How much bandwidth will you use"
    },
    {
        "title": "Is the underlined portion of the following statement true, or does it need to be replaced with one of the other fragments that appear below? Azure Information Protection (AIP) enables organizations to protect emails and documents using encryption, identity, and authorization policies.",
        "choices": [
            "encrypts data stored in Azure Premium storage.",
            "provides secure storage for certificates, cryptographic keys, and other secrets.",
            "is a mechanism in Azure Active Directory for encrypting and securing administrator credentials.",
            "No change is needed."
        ],
        "answer": "No change is needed."
    },
    {
        "title": "You want to ensure that the VMs created in a resource group do not exceed certain limits for cores and other resources to reduce costs. Which of the following Azure features enables you to control this?",
        "choices": [
            "Resource locks",
            "Azure policies",
            "Azure Resource Manager",
            "Azure initiatives"
        ],
        "answer": "Azure policies"
    },
    {
        "title": "From the following options, which one provides organizations the ability to manage compliance of Azure resources across multiple subscriptions?",
        "choices": [
            "Azure App Service Plans",
            "Azure Policy",
            "Azure Resource Group",
            "Management Group"
        ],
        "answer": "Azure Policy"
    },
    {
        "title": "Which of the following are correct statements describing Azure policies? (Choose all that apply.)",
        "choices": [
            "You can apply policies individually to a resource or within an Azure initiative.",
            "You can apply permissions using policies to determine what actions a user can take against a resource.",
            "Applying a policy to resource group causes the policy to apply to all resources within that resource group.",
            "Azure policies are a component of Security Center that enables you to define security related policies to protect resources."
        ],
        "answer": "You can apply policies individually to a resource or within an Azure initiative., Applying a policy to resource group causes the policy to apply to all resources within that resource group."
    },
    {
        "title": "If you want to restrict access to Azure resources per the company's policy so that only the admin can create a resource in the region where their office is located, then which Azure resource will you use to define this policy?",
        "choices": [
            "A Reservation",
            "A Management Group",
            "An Azure Policy",
            "Read-only lock"
        ],
        "answer": "An Azure Policy"
    },
    {
        "title": "Which of the following enable you to assign permissions to enable users to create and/or use resources in Azure?",
        "choices": [
            "Azure policies",
            "Resource groups",
            "Role-based access control (RBAC)",
            "Security Center"
        ],
        "answer": "Role-based access control (RBAC)"
    },
    {
        "title": "In Azure Monitor, which services can feed data?",
        "choices": [
            "On-Premises",
            "Azure Services",
            "Both On-Premises and Azure Services",
            "Only Premium Services"
        ],
        "answer": "Both On-Premises and Azure Services"
    },
    {
        "title": "In Azure, what types of locks can you apply? (Choose 2)",
        "choices": [
            "Closed",
            "Read-only",
            "Update",
            "Create only",
            "Delete"
        ],
        "answer": "Read-only, Delete"
    },
    {
        "title": "You need to delegate the capability to add users in Azure to another individual at your organization. Which of the following RBAC roles should you apply to the user to provide this capability to manage management groups with the least privilege?",
        "choices": [
            "Owner",
            "User Access Administrator",
            "Contributor",
            "Account Administrator"
        ],
        "answer": "User Access Administrator"
    },
    {
        "title": "In RBAC, how many elements are present?",
        "choices": [
            "2",
            "3",
            "4",
            "5"
        ],
        "answer": "3"
    },
    {
        "title": "To create a standard Azure Environment, you can take help from _______.",
        "choices": [
            "Azure Advisor",
            "Azure Policy",
            "Trust Center",
            "Azure Blueprint"
        ],
        "answer": "Azure Blueprint"
    },
    {
        "title": "Is the underlined portion of the following statement true, or does it need to be replaced with one of the other fragments that appear below? The CanNotDelete lock is more restrictive than the ReadOnly lock.",
        "choices": [
            "prevents administrators from modifying a resource.",
            "enables administrators to read but not modify a resource.",
            "is less restrictive than the ReadOnly lock.",
            "No change is needed."
        ],
        "answer": "is less restrictive than the ReadOnly lock."
    },
    {
        "title": "Which of the following statements are correct regarding Azure Blueprints? (Choose all that apply.)",
        "choices": [
            "Azure Blueprints use Azure Resource Manager (ARM) templates to deploy resources.",
            "Azure Blueprints let you define a repeatable group of Azure resources and associated role assignments and policies.",
            "A blueprint does not take effect until you publish the blueprint.",
            "Azure provides multiple roles for creating and managing blueprints."
        ],
        "answer": "Azure Blueprints use Azure Resource Manager (ARM) templates to deploy resources., Azure Blueprints let you define a repeatable group of Azure resources and associated role assignments and policies., Azure provides multiple roles for creating and managing blueprints."
    },
    {
        "title": "For compliance in Azure, which service can be used?",
        "choices": [
            "Azure Trust Center",
            "Azure Privacy Portal",
            "Azure Compliance Manager",
            "Azure Monitor"
        ],
        "answer": "Azure Compliance Manager"
    },
    {
        "title": "Which of the following statements about Azure Monitor is not correct?",
        "choices": [
            "Azure Monitor begins monitoring resources as soon as you create a resource.",
            "Azure Monitor begins monitoring resources as soon as you create metrics and logs for them.",
            "Application Insights enables developers to send telemetry data about the applications they develop in Azure.",
            "Azure Monitor supports Windows and Linux operating systems."
        ],
        "answer": "Azure Monitor begins monitoring resources as soon as you create metrics and logs for them."
    },
    {
        "title": "To classify, label, and help protect data based on its sensitivity, which Azure Service can you use?",
        "choices": [
            "Key Vault",
            "Defender for Cloud",
            "Azure Dedicated HSM",
            "Azure Information Protection"
        ],
        "answer": "Azure Information Protection"
    },
    {
        "title": "Which of the following would you use to view information about planned maintenance in Azure?",
        "choices": [
            "Azure Monitor",
            "Azure Security Center",
            "Azure Advisor",
            "Azure Service Health"
        ],
        "answer": "Azure Service Health"
    },
    {
        "title": "You are a compliance manager for your organization, which has decided to move several services from your on-premises data center into Azure. Which of the following should you use to view audit reports published by Microsoft to assure your CIO that Azure offers a secure and compliant platform?",
        "choices": [
            "Trust Center",
            "Compliance Manager",
            "Service Trust Portal",
            "Azure Compliance Portal"
        ],
        "answer": "Service Trust Portal"
    },
    {
        "title": "Which of the following provides broad guidance, tools, and assessments to help with a migration of workloads to Azure?",
        "choices": [
            "FastTrack for Azure",
            "Azure Advisor",
            "Cloud Adoption Framework for Azure",
            "Azure Migration Planning Service"
        ],
        "answer": "Cloud Adoption Framework for Azure"
    },
    {
        "title": "You need to deploy three virtual machines that will host an application. You want the VMs to reside in the same region, but you want to guard against power or other potential outages. You also need to ensure minimum latency between the instances. Which option describes a scenario that meets your requirements and is the most cost effective?",
        "choices": [
            "You deploy an additional set of three VMs to a different region and use continual replication between the two regions, then fail over to the other region in the event of an outage.",
            "You place the VMs in separate resource groups in the same region.",
            "You use separate availability zones for the VMs.",
            "You use separate availability sets for the VMs."
        ],
        "answer": "You use separate availability zones for the VMs."
    }

]
