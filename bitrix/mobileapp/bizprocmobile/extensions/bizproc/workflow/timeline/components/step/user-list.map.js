{"version":3,"file":"user-list.map.js","names":["jn","define","require","exports","module","animate","parallel","AppTheme","check","cross","PureComponent","SafeImage","ReduxAvatar","Type","ProfileView","UsersState","HIDDEN","SHOWN","UserList","constructor","props","super","this","shouldShowUserStatus","getUsers","length","usersContainerRef","usersRef","state","usersState","shouldHideUsers","users","isArray","filter","user","isObjectLike","id","usersHeight","render","View","testId","ref","style","position","height","isUsersHidden","opacity","paddingBottom","top","left","right","map","renderUser","flexDirection","alignItems","onClick","openUserProfile","flex","marginHorizontal","Text","textAlign","fontSize","fontWeight","color","colors","accentMainLinks","numberOfLines","text","fullName","status","renderStatus","workPosition","base4","ellipsize","isAccepted","isDeclined","icon","accentMainSuccess","marginLeft","borderRadius","borderStyle","borderWidth","borderColor","width","resizeMode","placeholder","content","userId","layout","openWidget","groupStyle","backdrop","bounceEnable","swipeAllowed","showOnTop","hideNavigationBar","horizontalSwipeAllowed","then","list","open","isBackdrop","catch","err","console","error","showUsers","isUsersShown","usersCount","runAnimations","duration","setState"],"sources":["user-list.js"],"mappings":"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"}