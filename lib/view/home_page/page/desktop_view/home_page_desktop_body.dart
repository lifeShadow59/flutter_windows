import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_windows/view/home_page/home_view_widget/home_page_animation_widget.dart';
import 'package:flutter_windows/widget/animations/asset_image_size_tween.dart';

class HomePageDesktopBody extends StatelessWidget {
  const HomePageDesktopBody({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.vertical,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: const [
          Text(" desktop app "),
          SizedBox(
            height: 10,
          ),
          HomePageAnimationWidget()
        ],
      ),
    );
  }
}
