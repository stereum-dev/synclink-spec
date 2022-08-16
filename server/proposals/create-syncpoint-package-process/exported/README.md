## Preamble

Below are a few proposals in form of a chart to create SyncPoint packages - each one has (**or had**) it's tiny drawbacks or issues.

The current discussed candidate to release in production is "**Create SyncPoint Package A.3**"!

Note: If you open a chart, take a close look at the red boxes!

The source files can be found at the [Create SyncPoint Package Process Overview](../README.md).

* * *

### &raquo; [Create SyncPoint Package A.1 \[Resource-Saving Attempt 1\] \[V-0001\]](synclink-server-create-syncpoint-package-process-proposal-a1-0001.drawio.png) (Click to open)

*   #### ![#008000](https://via.placeholder.com/10/008000/008000.png) `Pros`
    
    *   Fast and just a few resources needed

*   #### ![#f03c15](https://via.placeholder.com/10/f03c15/f03c15.png) `Issues`
    
    *   Checkpoint (SyncPoint) data most likely mismatch slot and calculated epoch

*   #### ![#1589F0](https://via.placeholder.com/10/1589F0/1589F0.png) `Summary`
    
    *   Checkpoint (SyncPoint) data retrieved via "eth/v2/debug/beacon/states/finalized" does often not match slot and calculated epoch of "/eth/v2/beacon/blocks/finalized".

    *   Therefore this proposal seems invalid.

* * *

### &raquo; [Create SyncPoint Package A.2 \[Resource-Saving Attempt 2\] \[V-0001\]](synclink-server-create-syncpoint-package-process-proposal-a2-0001.drawio.png) (Click to open)

*   #### ![#008000](https://via.placeholder.com/10/008000/008000.png) `Pros`

    *   Fast and just a few resources needed

*   #### ![#f03c15](https://via.placeholder.com/10/f03c15/f03c15.png) `Issues`
    
    *   Not sure if checkpoint (SyncPoint) data is really FINALIZED

*   #### ![#1589F0](https://via.placeholder.com/10/1589F0/1589F0.png) `Summary`
    
    *   Checkpoint (SyncPoint) data retrieved via "eth/v2/debug/beacon/states/finalized" does match slot and calculated epoch of "/eth/v2/beacon/blocks/finalized" **but** it is currently not sure if the data is really FINALIZED.

    *   Therefore this proposal need to be discussed in every detail.

* * *

### &raquo; [Create SyncPoint Package A.3 \[Resource-Saving Attempt 3\] \[V-0003\]](synclink-server-create-syncpoint-package-process-proposal-a3-0003.drawio.png) (Click to open)

*   #### ![#008000](https://via.placeholder.com/10/008000/008000.png) `Pros`
    
    *   Fast and just a few resources needed

*   #### ![#f03c15](https://via.placeholder.com/10/f03c15/f03c15.png) `Issues`
    
    *   Currently none

*   #### ![#1589F0](https://via.placeholder.com/10/1589F0/1589F0.png) `Summary`
    
    *   Checkpoint (SyncPoint) data retrieved via "eth/v2/debug/beacon/states/**slot**" does match slot and calculated epoch of "/eth/v2/beacon/blocks/**finalized**".

    *   A request to "eth/v2/debug/beacon/states/**finalized**" is in fact equal with "eth/v2/debug/beacon/states/**slot**" however by using the latter it is ensured that the retrieved data is definitely fully coherent.

    *   Because the **slot** is retrieved via "/eth/v2/beacon/blocks/finalized" it is also ensured that the retrieved data is definitely finalized.

    *   This proposal is an enhanced derivative of "A.2" above. The basics was worked out in our dev meeting on 01.08.2022.

    *   Many tests was done to confirm that the retrieved data is definitely fully coherent and finalized.

    *   The proposal is subject to discuss in the next dev meeting, suggested topics are:
        
        1.  Data collected for any client can only provide "slot" or "finalized" as value for "block_id" and/or "state_id".  
            This affects all SyncLink API endpoints in general but especially those of the **SyncLink Client API** that requires "block_id" and/or "state_id" values.

        2.  What are the exact goals of the SyncLink Server? Collect only finalized data or collect as much data as possible no matter what state or size it is?

        3.  Superficial brainstorming:  
            How do we layout the [syncLink-spec Wiki](https://github.com/stereum-dev/synclink-spec/wiki) section best for all kind of associated types like drafts, charts, FAQ's, technical documentations and similar?  
            How do we edit the Wiki (e.g.: Web Interface, Git, both) and which guidelines or standards do we want to follow?

* * *

### &raquo; [Create SyncPoint Package B.1 \[Resource-Intense Attempt 1\] \[V-0001\]](synclink-server-create-syncpoint-package-process-proposal-b1-0001.drawio.png) (Click to open)

*   #### ![#008000](https://via.placeholder.com/10/008000/008000.png) `Pros`
    
    *   Checkpoint (SyncPoint) data is in any case valid and finalized

*   #### ![#f03c15](https://via.placeholder.com/10/f03c15/f03c15.png) `Issues`
    
    *   Slow and extremly resource intensive

*   #### ![#1589F0](https://via.placeholder.com/10/1589F0/1589F0.png) `Summary`
    
    *   Checkpoint (SyncPoint) data is always retrieved via "eth/v2/debug/beacon/states/finalized" and thus in any case valid and finalized.

    *   Due to the large data set that is responded via "eth/v2/debug/beacon/states/finalized" the solution is slow ans extremely resource intensive.

    *   Therefore this proposal seems also not the best choice.