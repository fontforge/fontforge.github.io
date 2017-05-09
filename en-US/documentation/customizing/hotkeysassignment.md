---
published: true
layout: default
title: HotKeys assignment
---

FontForge has a [default assignment of hot key](/en-US/documentation/interface/hotkeys) (menu shortcuts, whatever term you wish to use). This assignment can be difficult to use on non-English keyboards. Even users with English keyboards might find reasons to disagree with it. So FontForge allows you to redefine the hot keys. 

Default hotkeys are provided for the menus in all windows which follow familiar key assignments such as Control+O to open a file and Control+c to "copy" something. The current hotkey for each menu item are shown in the menu itself to help you learn existing bindings and see if your modification to the bindings are as you expect.

The hotkey system allows you to customize the hotkey for anything that appears in the menus. You can freely change the hotkey for a menu item or add one if you find you are using a menu item frequently. Your settings for hotkeys are read from and stored in the hotkeys file. In it's most basic form this file is a sequence of lines of the form action:key. A large default hotkeys file is provided with FontForge in hotkeys/default file.  Its content can be copied to the hotkeys file and be edited to suit your needs.

The default and hotkeys files locations depend upon which OS FontForge is installed on:

<table class="table" border>

<tbody>

  <tr>
    <th>OS</th>
    <th>Source</th>
    <th>Destination</th>
  </tr>
  <tr>
    <td>Linux</td>
    <td>/usr/local/share/fontforge/hotkeys/default</td>
    <td>~/.config/fontforge/hotkeys</td>
  </tr>
  <tr>
    <td>Mac OS/X</td>
    <td>/Applications/FontForge.app/Contents/Resources/opt/local/share/fontforge/hotkeys/default</td>
    <td>~/.config/fontforge/hotkeys</td>
  </tr>
  <tr>
    <td>Windows</td>
    <td>%programfiles(x86)%\FontForgeBuilds\share\fontforge\hotkeys\default</td>
    <td>%userprofile%\AppData\Roaming\FontForge\hotkeys</td>
  </tr>

</tbody>

</table>

The below fragment of hotkeys will hopefully provide a nice example to get you started creating your own hotkey bindings. As you can see the action part starts with "CharView.Menu.", meaning that this action is to invoke a menu on a specific window type. You can assign a different hotkey to the same menu item in two different window types. For example, the glyph window might have control+o to show font information, whereas the fontview might retain control+o to mean open a font.

The first action in the below file, Point.Tools.Ruler, will invoke the Ruler menu item which is in the Tools menu, which is itself in the Point top level menu of the charview window (Glyph window). Notice that the key does not need to have a qualifier such as control or alt. Having no modifier for a hotkey is currently limited to the glyph window.

```
CharView.Menu.Point.Tools.Ruler: r
CharView.Menu.Point.Tools.Pointer: v
CharView.Menu.View.Show.Tab.Tab0: Ctl+1
CharView.Menu.View.Show.Tab.Tab1: Ctl+2
CharView.Menu.View.Zoom in: Shft++
CharView.Menu.View.Zoom in: z
CharView.Menu.View.Zoom in: =
CharView.Menu.Point.Tools.HVCurve: 1
+CharView.Menu.Point.Tools.G2: 1
```

Continuing down the list you see the use of Ctl+1 to select a specific tab in the glyph window. This is followed by three key bindings, any of which will zoom the display to a higher magnification level.

When reading hotkeys files at startup, FontForge will first load many system defaults and then your hotkeys file. Each file is processed from the first line to the last line. When reading these hotkey files, it might be the case that two or more lines have the exact same hotkey. For example, the system default is Control+o to open a file. You might like to override that hotkey to open the font info dialog instead. When FontForge is reading hotkeys files, if a hotkey is encountered that is already in use, the current action for that hotkey is replaced with the new action. So if you have the below line in your hotkeys file then Control+o will open the font info dialog instead of trying to open a font.

```
CharView.Menu.Element.Font Info...:Ctl+o
```

If you want to add an action for a hotkey rather than replace the current action, prefix the line with a "+" character as the Tools.G2 line does in the above example. This allows the "1" key to invoke both the Tools.HVCurve and Tools.G2 menu items. In this case only one menu will perform a task depending on if spiro mode is active.

There are many modifiers that FontForge recognizes which are listed in the next paragraph. These are always the English name for the modifier regardless of your locale. The names are fully case insensitive; you can write Control, conTROL, or control and they will have the same effect. The non modifier key, for example 's' without the quotes undergoes an internal case modification. If you specify control+S this will be interpreted as control being held while the 's' key is pressed. If you are wanting the Shift key to be held too, you need to explicitly specify that as with control+shift+s as the key definition.

FontForge recognizes the following standard modifiers: Alt, Esc Ctl, Control, Ctrl, Shft, Shift, CapsLock, Opt (the last corresponds to the Option key on the mac keyboard, Cmd+ for the mac Command key Note: This can only be used by an X program if the X11 application does not appropriate it -- this can be configured in the X11 Preferences).

Other than the CharView window type, there are FontView and MetricsView.
