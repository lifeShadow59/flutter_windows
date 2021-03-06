import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_windows/view/home_page/home_view_widget/home_page_animation_widget.dart';
import 'package:flutter_windows/widget/animations/square_animation/square_animation.dart';

class HomePageDesktopBody extends StatefulWidget {
  const HomePageDesktopBody({Key? key}) : super(key: key);

  @override
  State<HomePageDesktopBody> createState() => _HomePageDesktopBodyState();
}

class _HomePageDesktopBodyState extends State<HomePageDesktopBody> {
  Offset? tapUpDetails;
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        const SquareAnimation(),
        Center(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: const [
              Text(
                " Desktop App ",
                style: TextStyle(
                  fontSize: 25,
                ),
              ),
              SizedBox(
                height: 10,
              ),
              HomePageAnimationWidget()
            ],
          ),
        ),
      ],
    );
  }
}
