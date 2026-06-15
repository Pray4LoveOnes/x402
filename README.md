# x402 payments protocol


> "1 line of code to accept digital dollars. No fee, 2 second settlement, $0.001 minimum payment."



```typescript

app.use(

  // How much you want to charge, and where you want the funds to land

  paymentMiddleware("0xYourAddress", { "/your-endpoint": "$0.01" })

);

// That's it! See examples/typescript/servers/express.ts for a complete example. Instruction below for running on base-sepolia.

```



## Philosophy



Payments on the internet are fundamentally flawed. Credit Cards are high friction, hard to accept, have minimum payments that are far too high, and don't fit into the programmatic nature of the internet.

It's time for an open, internet-native form of payments. A payment rail that doesn't have high minimums + % based fee. Payments that are amazing for humans and AI agents.



## Principals



Open standard: the x402 protocol will never force reliance on a single party

HTTP Native: x402 is meant to seamlessly compliment the existing HTTP request made by traditional web services, it should not mandate additional requests outside the scope of a typical client / server flow.

Chain and token agnostic: we welcome contributions that add support for new chains, signing standards, or schemes, so long as they meet our acceptance criteria laid out in CONTRIBUTING.md

Trust minimizing: all payment schemes must not allow for the facilitator or resource server to move funds, other than in accordance with client intentions

Easy to use: x402 needs to be 10x better than existing ways to pay on the internet. This means abstracting as many details of crypto as possible away from the client and resource server, and into the facilitator. This means the client/server should not need to think about gas, rpc, etc.



## Ecosystem



The x402 ecosystem is growing! Check out our ecosystem page to see projects building with x402, including:



Client-side integrations

Services and endpoints

Ecosystem infrastructure and tooling

Learning and community resources



Want to add your project to the ecosystem? See our demo site README for detailed instructions on how to submit your project.



**Roadmap:** see ROADMAP.md



## Terms:



resource: Something on the internet. This could be a webpage, file server, RPC service, API, any resource on the internet that accepts HTTP / HTTPS requests.

client: An entity wanting to pay for a resource.

facilitator server: A server that facilitates verification and execution of on-chain payments.

resource server: An HTTP server that provides an API or other resource for a client.



## Technical Goals:



Permissionless and secure for clients and servers

Gassless for client and resource servers

Minimal integration for the resource server and client (1 line for the server, 1 function for the client)

Ability to trade off speed of response for guarantee of payment

Extensible to different payment flows and chains



## V1 Protocol



The x402 protocol is a chain agnostic standard for payments on top of HTTP, leverage the existing 402 Payment Required HTTP status code to indicate that a payment is required for access to the resource.



It specifies:



A schema for how servers can respond to clients to facilitate payment for a resource (PaymentRequirements)

A standard header X-PAYMENT that is set by clients paying for resources

A standard schema and encoding method for data in the X-PAYMENT header

A recommended flow for how payments should be verified and settled by a resource server

A REST specification for how a resource server can perform verification and settlement against a remote 3rd party server (facilitator)

A specification for a X-PAYMENT-RESPONSE header that can be used by resource servers to communicate blockchain transactions details to the client in their HTTP response

V1 Protocol Sequencing





The following outlines the flow of a payment using the x402 protocol. Note that steps (1) and (2) are optional if the client already knows the payment details accepted for a resource.



Client makes an HTTP request to a resource server.



Resource server responds with a 402 Payment Required status and a Payment Required Response JSON object in the response body.



Client selects one of the paymentRequirements returned by the server response and creates a Payment Payload based on the scheme of the paymentRequirements they have selected.



Client sends the HTTP request with the X-PAYMENT header containing the Payment Payload to the resource server.



Resource server verifies the Payment Payload is valid either via local verification or by POSTing the Payment Payload and Payment Requirements to the /verify endpoint of a facilitator server.



Facilitator server performs verification of the object based on the scheme and network of the Payment Payload and returns a Verification Response.



If the Verification Response is valid, the resource server performs the work to fulfill the request. If the Verification Response is invalid, the resource server returns a 402 Payment Required status and a Payment Required Response JSON object in the response body.



Resource server either settles the payment by interacting with a blockchain directly, or by POSTing the Payment Payload and Payment PaymentRequirements to the /settle endpoint of a facilitator server.



Facilitator server submits the payment to the blockchain based on the scheme and network of the Payment Payload.



Facilitator server waits for the payment to be confirmed on the blockchain.



Facilitator server returns a Payment Execution Response to the resource server.



Resource server returns a 200 OK response to the Client with the resource they requested as the body of the HTTP response, and a X-PAYMENT-RESPONSE header containing the Settlement Response as Base64 encoded JSON if the payment was executed successfully.



Type Specifications

Data types

Payment Required Response



{

  // Version of the x402 payment protocol

  x402Version: int,



  // List of payment requirements that the resource server accepts. A resource server may accept on multiple chains, or in multiple currencies.

  accepts: [paymentRequirements]



  // Message from the resource server to the client to communicate errors in processing payment

  error: string

}

paymentRequirements
