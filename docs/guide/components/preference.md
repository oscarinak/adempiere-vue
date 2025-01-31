 
# Preference

Allows set a default value for a record, the value can be set for the follows entities:

  - **Check Client**: Set default value for all clients
  - **Check Organization**: Set default value for all organizations
  - **Check User**: Set default value for all users
  - **Check Window**: Set default value for all windows

## ADempiere-ZK Version

<img :src="$withBase('/images/components/preference/zk-desktop-version-preference.png')" alt="Preference dialog for ZK verion" width="800px">

## ADempiere-Vue Version

<img :src="$withBase('/images/components/preference/preference-desktop-mobile.png')" alt="Preference dialog for Vue Version" width="800px">

When a flag is unchecked, the user make as default value for all entities related to check:

  When the flag **Window** is unchecked the default value setted is applied for all windows intead. The behavior can be see when a new record is created on any window with with the same field name.

The same behavior is for the flags **Client**, **Organization** and **User**.

## Where is it?

This dialog can be open over any field of window.

## What is the scope?

Just set the default value for a field on a client, window, organization or window.

## Functions and comments

::: tip
The default value for all entities checks is the follow: 

  - **For all organizations of this Client, this User and this Window**
:::

## How work in desktop version?

In desktop version just make click over a field and select the option "**Preference**", the preference dialog will be showed at center.

### Create Preference

![How to create preference in Desktop version]('/images/components/preference/zk-desktop-version-preference.gif' "How to create preference in Desktop version")

### Delete Preference

![How to delete preference in the Desktop version]('/images/components/preference/zk-desktop-version-preference.gif' "How to delete preference in the Desktop version")

## How work in mobile version?

In mobile version just make click over a field and select the option "**Preference**", the preference dialog will be opened at right as a drawer.

### Create Preference

![How to create preference in mobile version]('/images/components/preference/preference-desktop-mobile.gif' "How to create preference in mobile version")

### Delete Preference

![How to delete preference in mobile version]('/images/components/preference/preference-desktop-mobile.gif' "How to delete preference in mobile version")

## Develop Options

The **Preference** dialog was written on the follow path:

```bash
└── src                             # main source code
    └── components                  # global components
        └── ADempiere               # ADempiere specific components
            └── field               # Fields
                └── contextMenu     # Context Menu for all fields
                    └── preference  # Preference folder

```
A [demo](https://demo-ui.erpya.com/#/7aa4242a-93c0-42d8-92be-8250002d3e3c/d97027fd-4cd5-445e-8fd8-ef5d3f7959b4/window/53418?tabParent=0&action=fa50908e-40f1-11e9-91a1-0242ac140002) is here

### To do

In the ADempiere-UI version, field preferences are not set. Therefore, it is required that the problem be corrected so that these preferences can be established.

This problem was reported in the issues: https://github.com/adempiere/adempiere-vue/issues/814