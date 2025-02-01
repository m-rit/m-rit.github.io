---
title: "Verifiable Credential Revocation in Authentication Systems"
excerpt: "PoC with Linked Verifiable Credential for efficient Memebership Revocation<br/>"
collection: portfolio
---

### Example Scenario

For example, Alice is an employee of a bank and works in the finance department. In the organization’s IAM system, Alice is assigned the role of "Finance Analyst". Alice wants to access a third-party financial reporting tool, which is the service provider (SP) application used by her organization. She goes to the tool’s login page.

Traditionally, when she logs in with her bank-affiliated email and password, the IDP verifies the password and sends her details (email and any other attributes) required by the SP to create a session with permissions for the "Financial Analyst" role.

With VC, Alice can log in independently of the IDP, but her VC is required to have a claim with her roles like "Financial Analyst" in it. If Alice's roles change, for instance, updating from "Financial Analyst" to "Financial Analyst" and "Manager", the earlier VC has to be revoked, and a new VC has to be issued just to include the new role.

This frequent revocation of credentials adds burden to both the holders and issuers. Given the current strategies for revoking VCs, a modified credential issuing & revocation method is proposed to enable the feasible updating of memberships. 


### IDEA

The idea here is to distinguish between proof of identity and proof of membership. Take Alice, for example, who is identified with Bank ABC. Her proof of membership lies in the roles she holds, such as her role as a Finance Analyst.

A key improvement we propose is to streamline how Alice presents her credentials. When Alice logs into a service, she should only reveal the specific role she needs access to, without disclosing other memberships like her involvement in the bank’s "Hiking group".

To achieve this, we advocate for a new VC structure called membership-VC. This VC would exclusively handle membership-related information. It could include a secure link to an identity-VC, ensuring the integrity of Alice’s identity while separating out her various roles.

![VC Linking Framework](/images/PP1.png)

Whenever Alice needs to be added to a new group, a new membership-VC can be created that links to her identity-VC. This approach ensures that identity-VCs remain of equal size for all employees and can tolerate any number of added memberships. For revoking access to any role, the membership-VC can be independently revoked, saving the hassle of crafting an entirely new VC for Alice.


## V. Design Overview

### A. Membership-VC

The membership-VC includes a field `IdentityReference` with the URL of the Identity-VC. To protect against modification of the URI, we include the hashlink value of the URN. An example of a membership-VC is shown.

```json
{
  "IdentityReference": "https://example.com/identity-vc",
  "Hashlink": "abcdef1234567890",
  "Revocable": true,
  "RevocationFields": {
    "AccumulatorValues": "...",
    "RevocationStatus": "revoked"
  }
}
```
### B. Interaction Steps

### Sequence of Interactions

#### Issuance

- **Issuer Role**: The Issuer creates an Identity VC for the holder, stating that the employee is affiliated with the organization. Additionally, the Issuer creates at least one membership for the holder, indicating the role granted by the organization.

#### Presentation & Verification

- **Presentation**: The Holder presents the Identity-VC and membership-VC to the Verifier.
- **Verification**: The Verifier verifies the identity and membership proofs and checks if the membership credential is revoked or not.

#### Revocation/Update

- **Updating Memberships**: If there is a need to update memberships, the Issuer revokes the corresponding memberships.
- **Revocation Dependencies**: If the Identity-VC is revoked, all corresponding membership-VCs must also be revoked to maintain consistency and security.

