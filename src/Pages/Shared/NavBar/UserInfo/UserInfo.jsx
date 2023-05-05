import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function UserInfo({ userIcon, img, name, logOut }) {
  return (
    <div>
      {name ? (
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="button-tooltip-2">{name}</Tooltip>}
        >
          {({ ref, ...triggerHandler }) => (
            <Button variant="dark" {...triggerHandler} className="d-inline-flex align-items-center">
              {img ? (
                <Image ref={ref} width="30px" roundedCircle src={img} />
              ) : (
                <span ref={ref}>{userIcon}</span>
              )}
            </Button>
          )}
        </OverlayTrigger>
      ) : (
        userIcon
      )}
      <Button
        onClick={() => {
          logOut();
        }}
        variant="dark"
        className="d-inline-flex align-items-center"
      >
        logout
      </Button>
    </div>
  );
}
