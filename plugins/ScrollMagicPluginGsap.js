import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';

export function ScrollMagicPluginGsap(ScrollMagic, gsap) {
  ScrollMagic.Scene.addOption("tweenChanges", false, function (val) {
    return !!val;
  });
  
  ScrollMagic.Scene.extend(function () {
    var Scene = this;
    Scene.tweenChanges = function (newTween) {
      if (!arguments.length) {
        return Scene._tweenChanges;
      } else {
        if (Scene._tweenChanges !== newTween) {
          Scene._tweenChanges = newTween;
          Scene._tweenToChange();
        }
        return Scene;
      }
    };
    
    Scene._tweenToChange = function () {
      var tween = Scene.tween;
      if (Scene._tweenChanges && tween) {
        tween.pause();
        Scene.progress(Scene.progress());
      }
    };
    
    Scene.on("progress.plugin_gsap", function () {
      Scene._tweenToChange();
    });
    
    Scene.on("destroy.plugin_gsap", function (e) {
      Scene.off("*.plugin_gsap");
    });
  });
}

ScrollMagicPluginGsap(ScrollMagic, gsap);
