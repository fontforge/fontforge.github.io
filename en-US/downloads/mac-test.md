---
published: true
layout: default
title: FontForge on Mac OS X, Almost There
---

If you really like FontForge and want to see it continue to improve...

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="YEALFAA9WPBGQ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
(and download)
</form>

...or, if you've already given as much as this release of FontForge is worth to you, no worries.

All we ask is that you subscribe to the FontForge announcement list so that we can keep you in the loop and using the latest version of the software. If you don't want to hear about new FontForge releases, you can simply ignore the subscription confirmation e-mail. If you're already signed up, just resubmit with the same address.

<div id="emls_box">
<form id="emls_vform" style="display: inline;" name="emls_vform" target="emls_dummyframe" onsubmit="subscribeClicked()">
<input name="email" type="text"/><button onclick="subscribeClicked()" type="button">Subscribe/Confirm and Download</button>
</form>
</div>
<div id="dl_continue_box" style="display: none;">
Thanks. Continue <a href="../mac-dl">this way</a>.
</div>

<div style="height: 0, width:0, border: 0, visibility: hidden;">
<iframe width="0" height="0" border="0" name="emls_dummyframe" id="emls_dummyframe" style="visibility: hidden;"></iframe>
<iframe width="0" height="0" border="0" name="emls_dummyframe2" id="emls_dummyframe2" style="visibility: hidden;"></iframe>
<form id="emls_sform" name="emls_sform" action="https://lists.sourceforge.net/lists/subscribe/fontforge-announce" method="POST" target="emls_dummyframe">
<input name="fullname" type="hidden"/>
<input name="email" type="hidden"/>
<input type="hidden" name="pw" value=""/> <input type="hidden" name="pw-conf" value=""/> <input type="hidden" name="digest" value="0"/>
<input type="hidden" name="email-button" value="Subscribe"/>
</form>
<form id="emls_sform2" name="emls_sform2" action="http://mm.fontforge.org/ffml/presubscribe.php" method="POST" target="emls_dummyframe2">
<input name="email" type="hidden"/>
<input type="hidden" name="pw" value=""/> <input type="hidden" name="pw-conf" value=""/> <input type="hidden" name="digest" value="0"/>
<input type="hidden" name="email-button" value="Subscribe"/>
</form>
</div>

<script>
// We need to switch to buttons.
function downloadClicked() {
	document.getElementById("emls_box").style.display = "none";
	document.getElementById("dl_continue_box").style.display = "inline";
	window.setTimeout(function () { window.location.href = "http://fontforge.github.io/en-US/downloads/mac-dl/"; }, 500);
}
function subscribeClicked() {
	document.forms["emls_sform"]["email"].value = document.forms["emls_vform"]["email"].value;
	document.getElementById("emls_sform").submit();
	document.forms["emls_sform2"]["email"].value = document.forms["emls_vform"]["email"].value;
	document.getElementById("emls_sform2").submit();
	downloadClicked();
}
</script>
