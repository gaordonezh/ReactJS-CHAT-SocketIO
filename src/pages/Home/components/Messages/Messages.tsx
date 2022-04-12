import { Box, Card, CardHeader, Typography, CardContent, IconButton, Avatar } from "@mui/material";
import { useCustomContext } from "context/custom";
import ScrollBar from "react-perfect-scrollbar";
import { MoreVert } from "@mui/icons-material";

const Messages = () => {
  const { height } = useCustomContext();

  return (
    <Card elevation={0}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title={
          <Typography color="whitesmoke" variant="h5">
            Shrimp and Chorizo Paella
          </Typography>
        }
      />
      <CardContent>
        <ScrollBar style={{ height }}>
          <Box>
            <Typography color="whitesmoke">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque tempora exercitationem
              sequi aut quasi. Unde optio perferendis delectus dicta commodi officia atque,
              temporibus non similique ipsum consequuntur provident vel id sunt modi odio sit
              voluptatem ullam minima facere aspernatur saepe mollitia labore? Ea aliquam ab,
              debitis alias nemo cum dignissimos dolore recusandae quibusdam eaque voluptates
              voluptatum pariatur repudiandae rerum hic fugiat est iure laboriosam corporis natus
              id? Illum quaerat, ipsum ex obcaecati vero sapiente rerum error! Quae omnis distinctio
              enim dolor soluta quas sint error commodi facere nisi, neque minus temporibus eum,
              cumque hic consequuntur quia corporis qui numquam sequi unde est autem harum. Facilis
              sapiente culpa perferendis id magnam repellat earum alias iusto eveniet et rerum iste,
              reiciendis tempore est numquam modi aut tenetur cumque. Animi fuga omnis dolores earum
              repellat et libero id repudiandae laborum? Distinctio suscipit ad odit odio unde
              praesentium repellendus velit rem? Dicta dolorem perspiciatis deserunt recusandae eos
              sapiente delectus facere dolores nemo, quo neque consectetur possimus excepturi enim
              iusto sunt. Autem, iure quo qui, provident quibusdam quas ipsam cumque sunt velit
              repudiandae ad possimus. Porro labore qui in unde sequi provident ullam corporis
              temporibus alias quo perferendis consectetur quae, eum non nulla expedita harum,
              beatae veritatis ducimus? Quaerat magni odio laboriosam. Aliquam nihil omnis nesciunt
              quod, sed corporis voluptatum fugit, molestias harum quo numquam quasi, esse eveniet.
              Iste labore non distinctio illum cum. Voluptatum hic, illum perferendis et debitis
              cupiditate, numquam, ipsa fuga cumque officiis laboriosam deserunt. Eos, distinctio
              adipisci eum voluptatem nobis quod explicabo repudiandae odit fugiat non quam, qui
              debitis reiciendis temporibus sunt praesentium nisi, culpa corrupti! Placeat, fugiat?
              Aliquid doloribus debitis expedita totam, molestiae recusandae voluptatum sunt ex
              maxime nihil, est nobis facere rerum minima sed assumenda. Laudantium ullam explicabo
              libero ratione consequatur quaerat blanditiis. Ipsa aliquid distinctio expedita, omnis
              porro eligendi, nesciunt numquam quos quod sit ipsam nihil vitae voluptate illum
              quibusdam hic natus. Iusto voluptatem, dolores cum illo ex quia sit eius dolorem
              aspernatur necessitatibus dolorum temporibus, asperiores nesciunt nisi iure distinctio
              ducimus! Aut officia nobis labore quas doloribus sint deserunt earum aperiam ad
              tempore obcaecati inventore ut, quasi eos consequatur voluptas, magni a doloremque et
              repellat, placeat deleniti. At saepe tenetur neque necessitatibus accusantium quasi ex
              ad praesentium porro itaque? Nobis, optio expedita. Velit optio consequuntur alias!
              Perspiciatis corporis expedita impedit porro excepturi tempora doloribus pariatur
              consectetur consequatur atque accusamus ea consequuntur dolore cupiditate laborum
              recusandae illo aliquid quaerat, vero dicta illum ipsa facilis voluptatum. Nostrum
              molestias provident praesentium, natus animi voluptas, sed facere asperiores
              necessitatibus explicabo ipsa exercitationem voluptate magnam? Nostrum necessitatibus
              corrupti delectus? Nostrum sit obcaecati repellendus provident maiores voluptatum vel
              corrupti, neque pariatur iusto non unde aperiam atque quidem rem. Dolores eaque
              explicabo nemo nisi modi molestias ducimus, eius et quae numquam, quo natus! Incidunt
              quo rerum pariatur nihil hic ipsum eveniet, quos sint maiores dolores. Rem explicabo
              enim culpa incidunt, officiis laudantium in, suscipit natus itaque possimus aliquam
              assumenda, fugit iure non porro maiores libero sunt ad nihil quo! Quibusdam deleniti
              dolorem soluta odit.
            </Typography>
          </Box>
        </ScrollBar>
      </CardContent>
    </Card>
  );
};

export default Messages;
