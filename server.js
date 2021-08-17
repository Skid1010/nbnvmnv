/*INSERT GROUP ID AND COOKIE BELOW*/

var groupId = 6515560 // << Replace 12345 with your Group Id
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_A62FEB23398AEA5A40DB76C8D96C4D357B256AD6CB9128C6DB489DAD88058B54A67179A8EB16E600304A7458213EACA55458287A06FD125AA29683D4B7D537CA341E63428C0537CB4BB11C348E1CAEB7DE9E0B30AD9F6542FD0EDB3DED13993699365A11D179FD8D7F20E76099594BDFCB2D76E4DBA7EE91FEA3A246B20228FD02065A5D276F7931300AF23A50EF6A7080D180AE97A645858F73152375916AB05614A46FCE6805F71A5C933E577FCE6538BEFA843F6E8373D458606288AAF2FFF88D4C8BC053A2D1C1A7A771429A5EC207738AF5E939391535829DB233E259EA92388A9F62722C74237E91E427EEEFE1EE8D58815D2AB1738D8D0B942C4EBD71ACBA874AD261F04A7785734044CBC51990855A1EF778508D091EFB1DC3B64F9F3C5E199B47E5116ACDFA224C7A4F5B2E364D79DABB47E8321A5311275C5CA6B271FAB454884B6F2A547C768CE0CA56AA1DBEE6F7" // << Put your account cookie inside of the quotes

/*INSERT GROUP ID AND COOKIE ABOVE*/
 
 
const express = require("express");
const rbx = require("noblox.js");
const app = express();
 
app.use(express.static("public"));
 
async function startApp() {
  await rbx.cookieLogin(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();
 
app.get("/ranker", (req, res) => {
    var User = req.param("userid");
    var Rank = req.param("rank");
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});
 
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});