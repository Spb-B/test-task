{"version":3,"file":"registry.bundle.map.js","names":["this","BX","Messenger","v2","exports","im_v2_lib_utils","ui_fonts_opensans","im_v2_const","ui_vue3","AvatarSize","XS","S","M","L","XL","XXL","Avatar","name","props","dialogId","type","String","default","size","withAvatarLetters","Boolean","withStatus","withCounter","withBirthday","withTyping","computed","dialog","$store","getters","user","isUser","DialogType","isBot","bot","isActiveInvitation","recentItem","invitation","isActive","chatAvatarStyle","backgroundImage","avatar","avatarText","open","chat","includes","Utils","text","getFirstLetters","chatTypeIconClasses","classes","push","userStatusIcon","id","currentUserId","status","isSomeoneTyping","Object","keys","writingList","length","formattedCounter","counter","isChatMuted","isMuted","muteList","find","element","showBirthdays","RecentSettings","showBirthday","state","application","common","userId","template","DialogSpecialType","extranet","network","support24","TitleIcons","absent","birthday","ChatTitle","withMute","botType","isSelfChat","dialogSpecialType","isExtranet","support24Notifier","support24Question","isNetwork","leftIcon","isBirthday","isAbsent","color","tooltipText","phrases","isDarkTheme","options","darkTheme","BitrixVue","getFilteredPhrases","RecentLoadingState","compactMode","itemsToShow","Number","methods","isThreeLineVersion","Math","random","ComponentLegacy","Lib","Const","Vue3"],"sources":["registry.bundle.js"],"mappings":"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"}