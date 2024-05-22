<script>
_appDCurrentUser = null;
_appDGetUser = function () {
    if (_appDCurrentUser == null && sessionStorage != null) {
      storageUser = sessionStorage.getItem("User");
      if (storageUser != null) {
        try {
          domParser = new DOMParser();
          storageUser = domParser.parseFromString(storageUser, "text/xml");
          _appDCurrentUser = {
            FinesseFirstName : storageUser.getElementsByTagName("firstName")[0].childNodes[0].nodeValue,
            FinesseLastName : storageUser.getElementsByTagName("lastName")[0].childNodes[0].nodeValue,
            FinesseLoginId : storageUser.getElementsByTagName("loginId")[0].childNodes[0].nodeValue,
            FinesseLoginName : storageUser.getElementsByTagName("loginName")[0].childNodes[0].nodeValue,
            FinesseTeamId : storageUser.getElementsByTagName("teamId")[0].childNodes[0].nodeValue,
            FinesseTeamName : storageUser.getElementsByTagName("teamName")[0].childNodes[0].nodeValue
          }
        } catch {}
      }
    }
    return _appDCurrentUser;
}
config.userEventInfo = {
  PageView: function() {
	  return {
	    userData: _appDGetUser()
	  }
  },
  Ajax: function(context) {
    return {
      userData: _appDGetUser()
    }
  },
  VPageView: function() {
    return {
      userData: _appDGetUser()
    }
  }
};
</script>
