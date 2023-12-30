"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[196],{36018:e=>{e.exports=JSON.parse('{"functions":[{"name":"invokeClient","desc":"Invoke client with sent data. If the invocation reaches the client, but the\\nclient doesn\'t have a corresponding callback, return before timeOut\\nregardless but return false.","params":[{"name":"player","desc":"The client player to invoke.","lua_type":"Player"},{"name":"id","desc":"The identification for the invocation.","lua_type":"string"},{"name":"timeOut","desc":"Yield until timeOut (given in seconds) is reached.","lua_type":"number"},{"name":"...","desc":"Additional data to send to the client.","lua_type":"any"}],"returns":[{"desc":"Returns true if the server received a response, false otherwise.","lua_type":"boolean"},{"desc":"Additional data returned from the the client.","lua_type":"..."}],"function_type":"static","realm":["Server"],"yields":true,"source":{"line":59,"path":"src/init.luau"}},{"name":"invokeServer","desc":"Invoke the server with sent data. If the invocation reaches the server, but\\nthe server doesn\'t have a corresponding callback, return before timeOut\\nregardless but return false.","params":[{"name":"id","desc":"The identification for the invocation.","lua_type":"string"},{"name":"timeOut","desc":"Yield until timeOut (given in seconds) is reached.","lua_type":"number"},{"name":"...","desc":"Additional data to send to the server.","lua_type":"any"}],"returns":[{"desc":"Returns true if the client received a response, false otherwise.","lua_type":"boolean"},{"desc":"Additional data returned from the server.","lua_type":"..."}],"function_type":"static","realm":["Client"],"yields":true,"source":{"line":111,"path":"src/init.luau"}},{"name":"setCallback","desc":"Set the callback that is invoked when an invocation identified by id is\\nsent. Data sent with the invocation are passed to the callback. If on\\nthe server, the player who invoked is implicitly received as the first\\nargument.","params":[{"name":"id","desc":"The identification for the invocation.","lua_type":"string"},{"name":"callback","desc":"The callback function to set.","lua_type":"Callback?"}],"returns":[],"function_type":"static","source":{"line":154,"path":"src/init.luau"}},{"name":"getCallback","desc":"Return the callback corresponding with id.","params":[{"name":"id","desc":"The identification for the callback.","lua_type":"string"}],"returns":[{"desc":"The corresponding callback function, if it exists.","lua_type":"callback"}],"function_type":"static","source":{"line":165,"path":"src/init.luau"}}],"properties":[],"types":[],"name":"Postie","desc":"Postie is a safe alternative to RemoteFunctions with a time-out.","source":{"line":41,"path":"src/init.luau"}}')}}]);